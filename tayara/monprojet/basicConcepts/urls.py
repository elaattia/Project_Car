from django.urls import path, include
from . import views
urlpatterns=[
    
    
   path('new/', views.test_receive_json_data_view, name='test_receive_json_data'),
   #path('test/', views.test_receive_json_data_view2, name='test'),

    #path('test_receive_json_data/', views.test_receive_json_data_view, name='test_receive_json_data'),
    #path('receive_json_data/', views.getPredictions1, name='receive_json_data'),
    #path("",views.welcome, name="welcome"),
    #path("",views.home, name="home"),
    #path("user",views.User, name="user")
    #path("resultat",views.result, name="result")
]



