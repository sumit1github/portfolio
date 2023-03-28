from django import forms
from ckeditor.widgets import CKEditorWidget
from .models import Project, ProjectImages

class ProjectForm(forms.ModelForm):
    description = forms.CharField(widget=CKEditorWidget())

    title = forms.CharField(max_length=255, label='Project Name')
    title.widget.attrs.update({'class': 'form-control','type':'text','placeholder':'Project Name',"required":"required"})

    cover_image= forms.FileField(required= False)
    cover_image.widget.attrs.update({'class': 'form-control','type':'file',"required":"required"})

    class Meta:
        model = Project
        fields = ['title','description','cover_image']


class ProjectImagesForm(forms.ModelForm):
    
    image= forms.FileField(required= False)
    image.widget.attrs.update({'class': 'form-control','type':'file',"required":"required"})
    class Meta:
        model = ProjectImages
        fields = ['image']