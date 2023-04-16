from django.shortcuts import render, redirect
from django.views import View
from django.contrib import messages

from .forms import ProjectForm, ProjectImagesForm
from .models import User, ProjectImages, Project

class Sumit(View):
    template = 'common/sumit/sumit.html'

    def get(self, request):
        return render(request, self.template)
    
class SumitPortfolio(View):
    template = 'common/sumit/portfolio.html'
    model = Project

    def get(self, request):
        porject_list = self.model.objects.filter(user__email= 'sumit1panda@gmail.com')
        
        context = {
            'porject_list': porject_list
        }
        return render(request, self.template, context)

class SumitProjectDetail(View):
    template = 'common/sumit/sumit_project_detail.html'
    model = Project

    def get(self, request, project_id):
        project = self.model.objects.get(id= project_id)
        p_images = ProjectImages.objects.filter(project = project)
        context = {
            'project': project,
            'project_images': p_images
        }

        return render(request, self.template, context)

class ProjectList(View):
    model = Project
    template = 'common/project/project_list.html'
    from_class = ProjectForm

    def get(self, request):
        porject_list = self.model.objects.filter(user= request.user)
        
        context = {
            'porject_list': porject_list
        }
        return render(request, self.template, context)
    

class ProjectCreate(View):
    model = Project
    template = 'common/project/add_project.html'
    from_class = ProjectForm

    def get(self, request):
        context = {
            'form': self.from_class
        }
        return render(request, self.template, context)
    
    def post(self, request):

        form =self.from_class(request.POST, request.FILES)
        if form.is_valid():
            obj = form.save(commit= False)
            obj.user = request.user
            obj.save() 

        return redirect('common:project_edit',project_id=obj.id )

class ProjectEdit(View):
    model = Project
    template = 'common/project/edit_project.html'
    from_class = ProjectForm

    def get(self, request, project_id):
        project=  self.model.objects.get(id=project_id)
        context = {
            'form': self.from_class(instance=project),
            'image_form':ProjectImagesForm,
            'project':project,
            'project_images': ProjectImages.objects.filter(project = project)
        }
        return render(request, self.template, context)
    
    def post(self, request, project_id):
        project=  self.model.objects.get(id=project_id)
        form =self.from_class(request.POST, request.FILES, instance=project)
        if form.is_valid():
            form.save()

        return redirect('common:project_edit',project_id=project_id )
    

class ProjectImageAddDelete(View):
    model = Project
    from_class = ProjectImagesForm

    def post(self, request, project_id):
        project=  self.model.objects.get(id=project_id)
        form =self.from_class(request.POST, request.FILES)
        if form.is_valid():
            obj=form.save(commit= False)
            obj.project=project
            obj.save()

        return redirect('common:project_edit',project_id=project_id )

    def get(self, request, image_id):
        obj = ProjectImages.objects.get(id = image_id)
        context = {
            'image_list': image_list
        }
        return redirect('common:project_edit',project_id=obj.id )
    
