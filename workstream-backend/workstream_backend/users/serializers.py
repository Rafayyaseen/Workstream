from rest_framework import serializers
from .models import BasicUser
from .models import Projectlogs

class BasicUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = BasicUser
        fields = ('id', 'name', 'email', 'password')


class ProjectlogsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Projectlogs
        fields = '__all__'