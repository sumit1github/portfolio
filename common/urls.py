from django.urls import path
from . import views
app_name= 'common'

urlpatterns = [
    path('', views.Sumit.as_view(), name="sumit"),
    path('sumit_portfolio', views.SumitPortfolio.as_view(), name='sumit_portfolio'),
    path('sumit_project_detail/<str:project_id>', views.SumitProjectDetail.as_view(), name= "sumit_project_detail"),
    path("project_list", views.ProjectList.as_view(), name='project_list'),
    path("create_project", views.ProjectCreate.as_view(), name='create_project'),
    path('project_edit/<str:project_id>', views.ProjectEdit.as_view(), name='project_edit'),
    path('image_add_delete/<str:project_id>', views.ProjectImageAddDelete.as_view(), name= 'image_add_delete'),
]
