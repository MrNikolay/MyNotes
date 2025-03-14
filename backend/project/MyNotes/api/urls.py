from django.urls import include, path
from rest_framework import routers
from api.views import NoteModelViewSet, DataModelViewSet

app_name = 'api'

router = routers.DefaultRouter()
router.register(r'data', DataModelViewSet)
router.register(r'note', NoteModelViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
