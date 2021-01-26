#!/usr/bin/python
# -*- coding: utf-8 -*-
from django.urls import path
from . import views

urlpatterns = [
    path('add_post/ContentTitle', views.TitleContent_add_post),
    path('update_post', views.TitleContent_update_post),
    path('delete_post/<str:id>', views.TitleContent_delete_post),
    path('read_post/<str:id>', views.read_post),
    path('ContentTypeRead', views.ContentType_read),
    path('ContentTypeRead/<str:id>', views.ContentType_read),
    path('ContentType_read_post_all', views.ContentType_read_post_all),
    path('ContentTitle_read_post_all', views.ContentTitle_read_post_all),
    path('ContentTitleRead/<str:subject>&<str:content>', views.ContentTitle_read),
    path('newpost', views.newpost)
]
