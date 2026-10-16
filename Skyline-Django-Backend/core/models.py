from django.core.validators import RegexValidator
from django.db import models

phone_validator = RegexValidator(
    regex=r"^[6-9][0-9]{9}$",
    message="Enter a valid 10 digit Indian mobile number.",
)


class Service(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    price = models.CharField(max_length=100, help_text='e.g. "Rs. 550-650/Sq ft"')
    image = models.ImageField(upload_to="services/", blank=True, null=True)
    features = models.TextField(blank=True, help_text="One feature per line.")
    order = models.PositiveIntegerField(default=0, help_text="Lower numbers show first.")
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ["order", "id"]

    def __str__(self):
        return self.title

    def feature_list(self):
        return [line.strip() for line in self.features.splitlines() if line.strip()]


class Quote(models.Model):
    name = models.CharField(max_length=150)
    email = models.EmailField()
    phone = models.CharField(max_length=10, validators=[phone_validator])
    city = models.CharField(max_length=100, blank=True)
    service = models.ForeignKey(
        Service, on_delete=models.SET_NULL, null=True, blank=True, related_name="quotes"
    )
    message = models.TextField(blank=True)
    is_contacted = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.name} ({self.phone})"
