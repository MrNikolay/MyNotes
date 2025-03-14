from django.contrib import admin
from notes.models import Note, Data


class DataAdmin(admin.TabularInline):
    model = Data
    list_display = ('id', '__str__', 'note', 'order')
    readonly_fields = ('order', )
    extra = 0


@admin.register(Note)
class NoteAdmin(admin.ModelAdmin):
    list_display = ('user', '__str__', 'created')
    readonly_fields = ('created', )
    inlines = (DataAdmin, )