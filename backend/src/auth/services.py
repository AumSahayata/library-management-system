from sqlmodel import or_, select
from sqlmodel.ext.asyncio.session import AsyncSession
from src.auth.models import User
from src.auth.schemas import UserCreateModel
from src.auth.utils import generate_password_hash, verify_password


class UserServices:
    
    async def get_user_by_email(self, email: str, session: AsyncSession):
        statement = select(User).where(User.email == email)
        
        result = await session.execute(statement)
        user = result.scalar()
        return user
    
    async def get_user_by_username(self, username: str, session: AsyncSession):
        statement = select(User).where(User.username == username)
        
        result = await session.execute(statement)
        user = result.scalar()
        return user

    async def user_exists(self, session: AsyncSession, email: str = "", username: str = ""):
        statement = select(User).where(or_(User.username == username, User.email == email))
        
        result = await session.execute(statement)
        user = result.scalar()
        return user
    
    async def create_user(self, user_data: UserCreateModel, session: AsyncSession):
        user_data_dict = user_data.model_dump()
        
        new_user = User(
            **user_data_dict
        )
        
        new_user.password_hash = generate_password_hash(user_data_dict['password'])
        
        session.add(new_user)
        
        await session.commit()
        
        return new_user
    
    async def authenticate_user(self, password: str, session: AsyncSession, username: str = "", email: str = ""):
        if username == "":
            user = await self.get_user_by_email(email, session)
        else:
            user = await self.get_user_by_username(username, session)
        
        if not user:
            return False
        
        if not verify_password(password, user.password_hash):
            return False
        
        return user