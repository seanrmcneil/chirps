from rest_framework import viewsets
from core.serializers import ChirpSerializer
from core.models import Chirp

class ChirpViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows chirps to be viewed or edited.
    """
    queryset = Chirp.objects.all()
    serializer_class = ChirpSerializer