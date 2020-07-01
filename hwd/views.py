from django.shortcuts import render
import requests
from .models import hwdPost
from django.http import HttpResponse, HttpResponseRedirect
import json

import requests
def hwdView(request):
    return render(request,'hwd.html')

def postDatabase(request):
        if request.POST.get('predictNum') is not None:
            p = request.POST.get('predictNum')
            canvasdata = request.POST.get('canvasdata') 
            canvasdata = canvasdata.split(',')
            print('postDatabase test')
            print(p)
            print(canvasdata)
            new_item = hwdPost(predictNum = p,canvasData = canvasdata )
            new_item.save()
        return render(request,'hwd.html')

    
  