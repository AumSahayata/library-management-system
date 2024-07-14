from datetime import datetime, timedelta, timezone
from fastapi import HTTPException, status
from passlib.context import CryptContext
from src.config import Config
from jwt import PyJWTError
import jwt
from src.auth.schemas import TokenData

SECRET_KEY = Config.SECRET_KEY
ALGORITHM = Config.ALGORITHM

password_context = CryptContext(
    schemes=["bcrypt"],
    deprecated="auto"
)

def create_access_token(data: dict, exp_delta: timedelta | None = None):
    to_encode = data.copy()
    
    if exp_delta:
        expire = datetime.now(timezone.utc) + exp_delta
    else:
        expire = datetime.now(timezone.utc) + timedelta(days=7)
        
    to_encode.update({"exp":expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def generate_password_hash(password: str) -> str:
    hash = password_context.hash(password)
    
    return hash

def verify_password(password: str, hash: str) -> bool:
    
    return password_context.verify(password, hash)