#!/usr/bin/python
# -*- coding: utf-8 -*-
from djongo import models


# Create your models here.


class ContentType(models.Model):
    _id = models.ObjectIdField()
    type = models.CharField(max_length=255)
    subject = models.CharField(max_length=255)
    url = models.CharField(max_length=255)


class ContentTitle(models.Model):
    _id = models.ObjectIdField()
    subject = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    content = models.CharField(max_length=255)
    date = models.DateTimeField(auto_now_add=True)

