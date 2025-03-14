from django.template.context_processors import request
from rest_framework import viewsets, status
from notes.models import Data, Note
from notes.serializers import NoteSerializer, DataSerializer
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response


class NoteModelViewSet(viewsets.ModelViewSet):
    queryset = Note.objects.filter()
    serializer_class = NoteSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        return queryset.filter(user=self.request.user)

    def get_permissions(self):
        if self.action in ('update', 'create', 'destroy'):
            self.permission_classes = (IsAdminUser, )
        else:
            self.permission_classes = (IsAuthenticated, )
        return super().get_permissions()


class DataModelViewSet(viewsets.ModelViewSet):
    queryset = Data.objects.all()
    serializer_class = DataSerializer
    permission_classes = (IsAuthenticated, )

    def get_queryset(self):
        queryset = super().get_queryset()
        return queryset.filter(note__user=self.request.user)

    def create(self, request, *args, **kwargs):
        try:
            note = Note.objects.filter(id=request.data['note'])
            if not note.exists():
                return Response({'note': 'There is no note with this ID'}, status=status.HTTP_400_BAD_REQUEST)
            obj = Data.objects.create(note=note.first(), type=request.data['type'], text=request.data['text'])
            serializer = self.get_serializer(obj)
            return Response(data=serializer.data)
        except KeyError:
            return Response(
                {'note': 'This fields is required',
                 'type': 'This fields is required',
                 'text': 'This fields is required'},
                status=status.HTTP_400_BAD_REQUEST
            )
