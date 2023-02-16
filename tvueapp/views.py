from django.shortcuts import render

# Create your views here.

def home(request):
    template = 'tvueapp/home.html'
    context = {}
    return render(request, template, context=context)
