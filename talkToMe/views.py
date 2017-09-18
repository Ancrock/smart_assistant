# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse;
from django.template import loader
import json
from django.views.decorators.csrf import ensure_csrf_cookie
from spark import sparks
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
			result = sparks.getPerson(json_data)
			return HttpResponse(json.dumps(result));