from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
import asyncpg

app = FastAPI()

# Set up CORS
origins = [
    "http://localhost",
    "http://localhost:3000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Set up database connection
SQLALCHEMY_DATABASE_URL = "postgresql://postgres:o83714ElKCGvMJYk@db.rglfwncykgsxjvmwjfgz.supabase.co:5432/postgres"
engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(bind=engine)
Base = declarative_base()

# Create the database engine
engine = create_engine(SQLALCHEMY_DATABASE_URL)

# Create a sessionmaker to create sessions to the database
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Dependency to get a database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def read_root(db: Session = Depends(get_db)):
    # Do something with the database session
    return {"Hello": "World"}

@app.get('/hello')
def root():
    return {'message': 'Hello Krissh'}



@app.on_event("startup")
async def startup():
    # Connect to the PostgreSQL database
    app.state.pg_pool = await asyncpg.create_pool(dsn=SQLALCHEMY_DATABASE_URL)

@app.on_event("shutdown")
async def shutdown():
    # Close the PostgreSQL database connection pool
    await app.state.pg_pool.close()

# Define database model
class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True)
    password = Column(String)

# Define request body schema
class UserCreate(BaseModel):
    username: str
    email: str
    password: str

# Create endpoint to handle POST requests to /signup
@app.post("/signup")
def create_user(user: UserCreate, db: SessionLocal = Depends(get_db)):
    db_user = User(username=user.username, email=user.email, password=user.password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


@app.get('/hello')
def root():
    return {'message': 'Hello Krissh'}

@app.get("/donor")
async def table_data():
    async with app.state.pg_pool.acquire() as conn:
        # Execute a SELECT statement on the table you want to display
        rows = await conn.fetch("SELECT * FROM donor")
        # Return the data as a list of dictionaries
        return [dict(row) for row in rows]