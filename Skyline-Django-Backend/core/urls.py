from django.urls import path

from .views import QuoteCreateView, ServiceListView

urlpatterns = [
    path("services/", ServiceListView.as_view(), name="service-list"),
    path("quotes/", QuoteCreateView.as_view(), name="quote-create"),
]
