# !/usr/bin/python
# -*- coding: utf-8 -*-

from bson import ObjectId
from django.core import serializers
from django.db.models import Q
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.utils import json

from .models import ContentType, ContentTitle


@csrf_exempt
def TitleContent_add_post(request):
    bodyUnicode = request.body.decode('utf-8')
    bodyData = json.loads(bodyUnicode)
    bodyDatas = bodyData['data']

    ContentTitles = ContentTitle(subject=bodyDatas['subject'], title=bodyDatas['title'],
                                 content=bodyDatas['content'])
    ContentTitles.save()
    return HttpResponse("Inserted")


@csrf_exempt
def TitleContent_update_post(request):
    bodyUnicode = request.body.decode('utf-8')
    bodyData = json.loads(bodyUnicode)
    bodyDatas = bodyData['data']
    id = bodyDatas['pk']
    data = ContentTitle.objects.get(_id=ObjectId(id))
    data.subject = bodyDatas['subject']
    data.title = bodyDatas['title']
    data.content = bodyDatas['content']
    data.save()

    return HttpResponse("Post Updated")


def TitleContent_delete_post(request, id):
    model = ContentTitle.objects.get(_id=ObjectId(id))

    model.delete()
    return HttpResponse("Post Deleted")


def read_post(request, id):
    model = ContentType.objects.get(_id=ObjectId(id))

    return HttpResponse(model)


def ContentType_read_post_all(request):
    contentData = serializers.serialize('json', list(ContentType.objects.all()))

    return HttpResponse(contentData)


def ContentTitle_read_post_all(request):
    ContentTitleData = serializers.serialize('json', list(ContentTitle.objects.order_by('date').reverse()))

    return HttpResponse(ContentTitleData)


def ContentType_read(request):
    id = request.GET["id"]

    SubjectContent = serializers.serialize('json', list(ContentTitle.objects.filter(_id=ObjectId(id))))

    return HttpResponse(SubjectContent)


def ContentTitle_read(request, subject, content):
    FindSubject = subject
    FindContent = content
    SubjectContent = serializers.serialize('json',
                                           list(ContentTitle.objects.filter(
                                               Q(subject=FindSubject) & Q(title__contains=FindContent))))
    return HttpResponse(SubjectContent)


def newpost(request):
    print((ContentTitle.objects.order_by('date'))[1:5])

    SubjectContent = serializers.serialize('json',
                                           list(ContentTitle.objects.order_by('date').reverse()[:5]))
    print(SubjectContent)
    print(type(SubjectContent))
    return HttpResponse(SubjectContent)
