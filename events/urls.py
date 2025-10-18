from django.urls import path
from . import views

app_name = 'events'

urlpatterns = [
    path('', views.list, name='list'),       # list of all events
    path('<int:event_id>/', views.detail, name='detail'),  # detail page
]