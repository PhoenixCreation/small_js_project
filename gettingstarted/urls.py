from django.urls import path, include

from django.contrib import admin

admin.autodiscover()

import hello.views

urlpatterns = [
    path("", hello.views.index, name="index"),
    path("voice_search", hello.views.voice_search, name="voice_search"),
    path("image_recognition",hello.views.image_recognition, name="image_recognition"),
    path("console_to_html",hello.views.console_to_html,name="console_to_html"),
]
