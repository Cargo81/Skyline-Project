from rest_framework import generics
from rest_framework.throttling import ScopedRateThrottle

from .models import Quote, Service
from .serializers import QuoteSerializer, ServiceSerializer


class ServiceListView(generics.ListAPIView):

    serializer_class = ServiceSerializer
    pagination_class = None

    def get_queryset(self):
        return Service.objects.filter(is_active=True)


class QuoteCreateView(generics.CreateAPIView):
    
    queryset = Quote.objects.all()
    serializer_class = QuoteSerializer
    throttle_classes = [ScopedRateThrottle]
    throttle_scope = "quotes"
