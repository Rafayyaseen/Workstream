from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import BasicUser
from .serializers import BasicUserSerializer
import bcrypt
from django.shortcuts import get_object_or_404
from .models import Projectlogs
from .serializers import ProjectlogsSerializer
from django.utils import timezone

@api_view(['POST'])
def create_user(request):
    if request.method == 'POST':
        serializer = BasicUserSerializer(data=request.data)

        if serializer.is_valid():
            hashed_password = bcrypt.hashpw(serializer.validated_data['password'].encode('utf-8'), bcrypt.gensalt())
            serializer.validated_data['password'] = hashed_password.decode()
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def authenticate_user(request):
    if request.method == 'POST':
        email = request.data.get('email')
        password = request.data.get('password')

        try:
            user = BasicUser.objects.get(email=email)

            if bcrypt.checkpw(password.encode('utf-8'), user.password.encode('utf-8')):
                return Response({'message': 'Authentication successful','user_id': user.id}, status=status.HTTP_200_OK)
            else:
                return Response({'message': 'Authentication failed'}, status=status.HTTP_401_UNAUTHORIZED)
        except BasicUser.DoesNotExist:
            return Response({'message': 'User does not exist'}, status=status.HTTP_404_NOT_FOUND)


@api_view(['POST'])
def get_username_by_id(request):
    if request.method == 'POST':
        userId = request.data.get('userId', None)

        if userId is None:
            return Response({'error': 'User ID not provided'}, status=status.HTTP_400_BAD_REQUEST)
        
        user = get_object_or_404(BasicUser, id=userId)
        return Response({'name': user.name}, status=status.HTTP_200_OK)


@api_view(['POST'])
def create_projectlogs(request):
    if request.method == 'POST':
        try:
            user_id = request.data.get('user_id')
            data = request.data.get('data')
            
            # Set the timestamp to the current datetime
            current_time = timezone.now()

            # Create a new Projectlogs instance and save it to the database
            projectlogs = Projectlogs(user_id=user_id, data=data, timestamp=current_time)
            projectlogs.save()

            # Serialize the saved data for the response
            serializer = ProjectlogsSerializer(projectlogs)

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
     

@api_view(['POST'])
def get_project_logs(request):
    if request.method == 'POST':
        userId = request.data.get('userId', None)

        if userId is None:
            return Response({'error': 'User ID not provided'}, status=status.HTTP_400_BAD_REQUEST)
        
        
        projectmodel = Projectlogs.objects.filter(user_id=userId).order_by('-timestamp').first() 
        return Response({'data': projectmodel.data}, status=status.HTTP_200_OK)
        