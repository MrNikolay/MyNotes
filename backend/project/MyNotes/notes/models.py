from django.db import models
from django.template.context_processors import request
from django.utils.text import re_prt
from users.models import User


class Note(models.Model):
    user = models.ForeignKey(to=User, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'заметку'
        verbose_name_plural = 'Заметки'

    def __str__(self):
        return f"Заметка №{self.id}"


class Data(models.Model):
    HEADER = 0
    TEXT = 1
    TYPE = (
        (HEADER, 'Заголовок'),
        (TEXT, 'Текст'),
    )

    note = models.ForeignKey(to=Note, on_delete=models.CASCADE)
    type = models.PositiveSmallIntegerField(choices=TYPE)
    text = models.TextField()
    order = models.PositiveIntegerField(null=True, blank=True)

    class Meta:
        verbose_name = 'данные'
        verbose_name_plural = 'Данные'

    def __str__(self):
        return f"{self.note.user}"

    def save(self, force_insert=False, force_update=False, using=None, update_fields=None):
        if not Data.objects.filter(note__user=self.note.user, note__id=self.note.id).exists():
            self.order = 1
        else:
            self.order = Data.objects.filter(note__user=self.note.user, note__id=self.note.id).last().order+1
        super().save()

