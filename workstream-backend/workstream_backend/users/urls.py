from django.urls import path
from . import views
urlpatterns = [
    path('api/create_user/', views.create_user, name='api_create_user'),
    path('api/authenticate_user/', views.authenticate_user, name='api_authenticate_user'),
     path('api/getusername/', views.get_username_by_id, name='get_username_by_id'),
     path('api/projectlogs/', views.create_projectlogs, name='projectlogs-api'),
      path('api/getprojectlogs/', views.get_project_logs, name='get-project-logs'),
]
