from rest_framework import serializers

from .models import Quote, Service


class ServiceSerializer(serializers.ModelSerializer):
    features = serializers.SerializerMethodField()

    class Meta:
        model = Service
        fields = ["id", "title", "description", "price", "image", "features"]

    def get_features(self, obj):
        return obj.feature_list()


class QuoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quote
        fields = ["id", "name", "email", "phone", "city", "service", "message", "created_at"]
        read_only_fields = ["id", "created_at"]
        extra_kwargs = {
            "city": {"required": False, "allow_blank": True},
            "message": {"required": False, "allow_blank": True},
            "service": {"required": False, "allow_null": True},
        }
