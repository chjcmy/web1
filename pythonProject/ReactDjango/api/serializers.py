#!/usr/bin/python
# -*- coding: utf-8 -*-
from rest_framework import serializers
from .models import ContentType, ContentTitle


class ContentTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContentType
        fields = ('id',
                  'type',
                  'name',
                  'url')


class ContentTitleSerializer(serializers.ModelSerializer):

    class Meta:
        model = ContentTitle
        fields = ('id',
                  'subject',
                  'title',
                  'content',
                  'date')
