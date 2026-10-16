from django.contrib import admin

from .models import Quote, Service


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ("title", "price", "order", "is_active")
    list_editable = ("order", "is_active")
    search_fields = ("title",)


@admin.register(Quote)
class QuoteAdmin(admin.ModelAdmin):
    list_display = ("name", "phone", "email", "service", "is_contacted", "created_at")
    list_filter = ("is_contacted", "created_at", "service")
    list_editable = ("is_contacted",)
    search_fields = ("name", "email", "phone", "message")
    readonly_fields = ("created_at",)
