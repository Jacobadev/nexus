from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .boosters_router import router as booster_router
from .users_router import router as user_router


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(user_router, prefix="/user")
app.include_router(booster_router, prefix="/booster")