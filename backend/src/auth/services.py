from sqlmodel import or_, select
from sqlmodel.ext.asyncio.session import AsyncSession
from src.auth.models import User
from src.auth.schemas import UserCreateModel
from src.auth.utils import generate_password_hash, verify_password
from src.book.schemas import EmailSchema
from src.book.utils import send_email


class AuthServices:
    
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
    
    async def get_users_by_role(self, role: int, session: AsyncSession):
        statement = select(User).where(User.role == role)
        
        result = await session.execute(statement)
        users = result.scalars()
        return users
    
    async def get_user_by_uid(self, uid: str, session: AsyncSession):
        statement = select(User).where(User.uid == uid)
        
        result = await session.execute(statement)
        users = result.scalar()
        return users

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
        
        email_data = EmailSchema(
            email=new_user.email,
            subject=f"Welcome to the library",
            body=f"Your library account has been created and you are free to use all your services.\nUsername: {user_data_dict['username']} \nPassword: {user_data_dict['password']}"
        )
        
        send_email(email_data=email_data)
        
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