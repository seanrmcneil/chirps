from rest_framework import viewsets
from core.serializers import ChirpSerializer
from core.models import Chirp
from rest_framework.response import Response

class ChirpViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows chirps to be viewed or edited.
    """
    queryset = Chirp.objects.all()
    serializer_class = ChirpSerializer

    # TODO: finish if wanting to sort by votes
    # def list(self, request, *args, **kwargs):
    #     queryset = self.filter_queryset(self.get_queryset())
    #     ## Ranking upvotes * 1/(number of hours ago)
    #     queryset = sorted(queryset, key=lambda t: t.recency_score)
    #     serializer = self.get_serializer(queryset, many=True)
    #     return Response(serializer.data)
