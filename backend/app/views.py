from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status,viewsets
from django.shortcuts import render
from .models import users
from .serializers import UsersSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = users.objects.all()
    serializer_class = UsersSerializer

# @api_view(['GET'])
# def users_list(request):
#     if request.method == 'GET':
#         usersL=users.objects.all()
#         serializer = UsersSerializer(usersL, many=True)
#         return Response(serializer.data)
    
# @api_view(['POST'])
# def create(request):
    
#     serializer = UsersSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#         return Response(serializer.data, status=status.HTTP_201_CREATED)
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['GET', 'PUT', 'DELETE'])
# def user_detail(request, pk):
#     try:
#         user = users.objects.get(pk=pk)
#     except users.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)

#     if request.method == 'GET':
#         serializer = UsersSerializer(user)
#         return Response(serializer.data)

#     if request.method == 'PUT':
#         serializer = UsersSerializer(user, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     if request.method == 'DELETE':
#         user.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)




# Create your views here.
