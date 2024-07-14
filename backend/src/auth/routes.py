from datetime import timedelta
from typing import Dict, List
from fastapi import APIRouter, Depends, HTTPException, Request, Response, status
from src.auth.models import User
from src.auth.utils import create_access_token
from .services import AuthServices
from src.config import Config
from src.db.main import get_session
from sqlalchemy.ext.asyncio.session import AsyncSession
from .schemas import UserCreateModel, UserLoginModelEmail, UserLoginModelUsername

auth_router = APIRouter()

auth_services = AuthServices()

@auth_router.post("/login",status_code=status.HTTP_200_OK)
async def login_for_access_token(user: UserLoginModelUsername, session: AsyncSession = Depends(get_session)):
    user_in_db = await auth_services.authenticate_user(username = user.username, password = user.password, session = session)
    
    if not user_in_db:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
        
    access_token_expires = timedelta(days=Config.ACCESS_TOKEN_EXPIRE_DAYS)
    data={"sub": str(user_in_db.uid),"role": int(user_in_db.role)}
    access_token = create_access_token(data = data, exp_delta=access_token_expires)
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "role": user_in_db.role
    }

@auth_router.post("/login/email",status_code=status.HTTP_200_OK)
async def login_for_access_token(user: UserLoginModelEmail, session: AsyncSession = Depends(get_session)):
    user_in_db = await auth_services.authenticate_user(email = user.email, username="", password = user.password, session = session)
    
    if not user_in_db:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
        
    access_token_expires = timedelta(days=Config.ACCESS_TOKEN_EXPIRE_DAYS)
    data={"sub": str(user_in_db.uid),"role": int(user_in_db.role)}
    access_token = create_access_token(data = data, exp_delta=access_token_expires)
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "role": user_in_db.role
    }

@auth_router.post("/signup", response_model=User, status_code=status.HTTP_201_CREATED)
async def create_user(request: Request, user_data: UserCreateModel, session: AsyncSession = Depends(get_session)):
    
    user = request.state.user
    
    if user.role == 0:
        email = user_data.email
        username = user_data.username

        user_exists = await auth_services.user_exists(email= email, username=username, session=session)

        if user_exists:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="User with email or username already exists",
            )

        await auth_services.create_user(user_data, session)

        return Response(content="successful", status_code=201)    
    else:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Only admin can create account")

@auth_router.get("/users", response_model = Dict[str, List[User]])
async def get_all_users(request: Request, session: AsyncSession = Depends(get_session)):
    user = request.state.user
    
    if user.role == 0:
        normal_users = await auth_services.get_users_by_role(role=1, session=session)
        librarians = await auth_services.get_users_by_role(role=2, session=session)
    
    return {"users":normal_users, "librarians":librarians}