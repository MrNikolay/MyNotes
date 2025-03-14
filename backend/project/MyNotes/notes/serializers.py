from rest_framework import serializers
from notes.models import Data, Note
from users.models import User


class NoteSerializer(serializers.ModelSerializer):
    user = serializers.SlugRelatedField(
        queryset=User.objects.all(),
        slug_field='username',
    )

    class Meta:
        model = Note
        fields = ['id', 'user', 'created', ]
        read_only_fields = ('created',)


class DataSerializer(serializers.ModelSerializer):
    note = NoteSerializer()
    type = serializers.ChoiceField(required=True, choices=Data.TYPE)
    type_display = serializers.SerializerMethodField()

    class Meta:
        model = Data
        fields = ['id', 'note', 'type', 'type_display', 'text', 'order']

    @staticmethod
    def get_type_display(obj):
        return dict(Data.TYPE).get(obj.type)