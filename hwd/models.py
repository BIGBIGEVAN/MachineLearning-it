from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.contrib.postgres.fields import ArrayField

class hwdPost(models.Model):
    predictNum = models.PositiveSmallIntegerField()
    canvasData = ArrayField(models.CharField(max_length=800), blank=True)
    data_posted = models.DateTimeField(default = timezone.now)
