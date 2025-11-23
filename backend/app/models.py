from django.db import models

# Create your models here.
class users(models.Model):
    nom=models.CharField(max_length=100)
    email=models.EmailField()
    role=models.CharField(max_length=100)
    isactive=models.BooleanField(default=False)

