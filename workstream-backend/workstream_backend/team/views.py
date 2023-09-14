from django.shortcuts import render, get_object_or_404, redirect
from .models import Team
from django.http import JsonResponse
from .models import Team
from .serializers import TeamSerializer
def team_list(request):
    teams = Team.objects.all()
    return render(request, 'team_list.html', {'teams': teams})

def team_create(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        custom_data = request.POST.get('custom_data')

        if name:  
            team = Team.objects.create(name=name, custom_data=custom_data)
            return redirect('team_list')
    else:
        name = ''
        custom_data = ''

    return render(request, 'team_form.html', {'name': name,'custom_data': custom_data})

def team_detail(request, pk):
    team = get_object_or_404(Team, pk=pk)
    return render(request, 'team_detail.html', {'team': team})


def api_team_list(request):
    Teams=Team.objects.all()
    serializer=TeamSerializer(Teams,many=True)
    return JsonResponse(serializer.data,safe=False)


def api_team_list_id(request,pk):
    Teams= get_object_or_404(Team, pk=pk)
    serializer=TeamSerializer(Teams)
    return JsonResponse(serializer.data,safe=False)