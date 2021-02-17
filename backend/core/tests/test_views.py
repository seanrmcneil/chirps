from django.test import TestCase
from django.urls import reverse
from core.models import Chirp
from core.views import ChirpViewSet


class ChirpViewTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        Chirp.objects.create(text='First Test Chrip')

    def setUp(self):
        pass

    def test_get_chrips(self):
        response = self.client.get(reverse('chirps-list'))
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 1)
