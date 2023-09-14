from django.db import models
from django.contrib.auth.models import AbstractUser

class Team(models.Model):
    name = models.CharField(max_length=100)
    custom_data = models.JSONField(blank=True, null=True)

    def __str__(self):
        return self.name


