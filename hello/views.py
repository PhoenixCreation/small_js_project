from django.shortcuts import render
from django.http import HttpResponse

from django.urls import get_resolver

# Create your views here.
def index(request):
    site = get_resolver().url_patterns
    data = []
    for value in site:
        data.append(value.name)
    info = {
        "data": data
    }
    return render(request, "index.html",context=info)

def voice_search(request):
    return render(request, "voice_search.html")

def image_recognition(request):
    return render(request, "image_recognition.html")

def console_to_html(request):
    return render(request,"console_to_html.html")
