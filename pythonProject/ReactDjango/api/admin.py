#!/usr/bin/python
# -*- coding: utf-8 -*-
from django.contrib import admin
from .models import *


admin.site.register(ContentType)
admin.site.register(ContentTitle)

