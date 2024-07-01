
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('',include('public.urls')),
    path("",include("basicConcepts.urls")),
    path('accounts/',include('accounts.urls')),
    path('admin/', admin.site.urls),
    path('api/auth/', include('rest_framework.urls'))
    
]
