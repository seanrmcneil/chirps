from django.db import models
from django.utils import timezone

# Create your models here.
class Chirp(models.Model):
    id = models.AutoField(primary_key=True)
    text = models.CharField(max_length=140)
    upvotes = models.IntegerField(default=0)
    created = models.DateTimeField(auto_now_add=True)

    # TODO: finish with recency score
    # @property
    # def recency_score(self):
    #     hours_ago = self.created - timezone.now()
    #     print(hours_ago)
    #     return self.upvotes * float(1/hours_ago.hours)
    class Meta:
        managed = True
        ordering = ('-upvotes','-created')