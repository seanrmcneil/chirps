from core.models import Chirp
from rest_framework import serializers


class ChirpSerializer(serializers.ModelSerializer):
    def validate_upvotes(self, value):
        curr_votes = self.instance.upvotes
        return curr_votes+1 if value >= 1 else curr_votes-1


    class Meta:
        model = Chirp
        fields = '__all__'

