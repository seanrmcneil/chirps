from django.db import models

# Create your models here.
class Chirp(models.Model):
    id = models.AutoField(primary_key=True)
    text = models.CharField(max_length=140)

    class Meta:
        managed = True