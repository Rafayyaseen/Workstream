from django.db import models

class BasicUser(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100) 

    def __str__(self):
        return self.name


class Projectlogs(models.Model):
    user_id = models.IntegerField()  # User ID
    data = models.JSONField()
    timestamp = models.DateTimeField(null=True) 

    def __str__(self):
        return str(self.user_id)
