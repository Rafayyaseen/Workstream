from django.urls import path
from . import views

urlpatterns = [
    path('teams/', views.team_list, name='team_list'),
    path('teams/create/', views.team_create, name='team_create'),
    path('teams/<int:pk>/', views.team_detail, name='team_detail'),
    path('teams/api/', views.api_team_list, name='api_team_list'),
    path('teams/api/<int:pk>/', views.api_team_list_id, name='api_team_list_id'),

    
]
