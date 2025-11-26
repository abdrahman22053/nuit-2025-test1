from django.urls import path
from .views import UserViewSet
from rest_framework.routers import DefaultRouter


# urlpatterns=[
#     path("users/",users_list,name="users_list"),
#     path("create/",create,name="create"),
#     path('users/<int:pk>',user_detail,name="user_detail"),

# ]
router = DefaultRouter()
router.register('users', UserViewSet)

urlpatterns = router.urls