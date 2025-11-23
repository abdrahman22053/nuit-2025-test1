from django.urls import path
from .views import users_list,create,user_detail

urlpatterns=[
    path("users/",users_list,name="users_list"),
    path("create/",create,name="create"),
    path('users/<int:pk>',user_detail,name="user_detail"),

]