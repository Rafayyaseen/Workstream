from django.contrib import admin
from .models import BasicUser
from .models import Projectlogs

admin.site.register(BasicUser)
admin.site.register(Projectlogs)