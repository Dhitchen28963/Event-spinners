from django.contrib import admin
from django.urls import path, include
from home import views as home_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home_views.index, name='home'),
    path('about/', include('about.urls')),
    path('services/', include('services.urls')),
    path('events/', include('events.urls')),
    path('testimonials/', include('testimonials.urls')),
    path('contact/', include('contact.urls')),
    path('careers/', include('careers.urls')),
    path('music/', include('music.urls', namespace='music')),
]