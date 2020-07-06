from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
import math
import json
import pandas_datareader as web 
import numpy as np 
import pandas as pd
#from sklearn.preprocessing import MinMaxScaler 
def sppView(request):
    return render(request,'spp.html')

def userinput(request):
    stocksymbol = request.POST["stocksymbol"]
    trainStartdate = request.POST["trainSdate"]
    trainEnddate = request.POST["trainEdate"]
    vailtime = request.POST["validationtime"]
    df = web.DataReader(stocksymbol,data_source = 'yahoo',start = '2018-01-01',end = '2020-02-01')
    df.reset_index(inplace=True,drop=False)
    df = df.to_json()
    return render(request,'spp.html',{"stockdata":df})
    
