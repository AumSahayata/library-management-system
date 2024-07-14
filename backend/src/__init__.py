import re
from fastapi import FastAPI, HTTPException, Request, status
from fastapi.responses import JSONResponse
from src.auth.routes import auth_router
from src.book.routes import book_router
from src.auth.utils import decode_token

app = FastAPI()

EXCLUDED_BASE_PATHS = [
    re.compile(r"^/api/auth/login"),
]

@app.middleware("http")
async def check_token(request: Request, call_next):
    request_path = request.url.path

    if any(pattern.match(request_path) for pattern in EXCLUDED_BASE_PATHS):
        return await call_next(request)

    auth_header = request.headers.get("Authorization")
    if auth_header and auth_header.startswith("Bearer "):
        token = auth_header.split(" ")[1]
        try:
            token_data = decode_token(token)
            request.state.user = token_data
        except HTTPException as e:
            return JSONResponse(status_code=e.status_code, content={"detail": e.detail})
    else:
        return JSONResponse(
            status_code=status.HTTP_401_UNAUTHORIZED,
            content={"detail": "Invalid authentication credentials"},
            headers={"WWW-Authenticate": "Bearer"},
        )
    response = await call_next(request)
    return response


app.include_router(auth_router, prefix = f"/api/auth", tags = "auth")
app.include_router(book_router, prefix = f"/api/book", tags = "book")