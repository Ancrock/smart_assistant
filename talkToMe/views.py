# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse;
from django.template import loader
import json
from django.views.decorators.csrf import ensure_csrf_cookie
from spark import sparks
from spark import bankData
@ensure_csrf_cookie


# Create your views here.
def index(request):
	return render(request, 'talkToMe/MainPage.html')

def apicall(request):
	# print(request.body);
	if request.is_ajax():
		if request.method == 'POST':
			# print 'Raw Data: "%s"' % request.body
			json_data = json.loads(request.body);
			print json_data
			result = sparks.getData()
			return HttpResponse(json.dumps(result));

def getBankData(request):
	if request.is_ajax():
		if request.method == 'POST':
			json_data = json.loads(request.body);
			print json_data
			result = bankData.getData();
			return HttpResponse(json.dumps(result));