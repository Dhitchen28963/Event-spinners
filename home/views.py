from django.shortcuts import render

def index(request):
    # Renders the template 'home/index.html'
    return render(request, 'home/index.html')