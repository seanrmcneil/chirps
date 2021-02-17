from django.test import TestCase
from core.models import Chirp

# models test
class ChirpTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        pass

    def setUp(self):
        pass

    def test_chrip_creation(self):
        chirp = Chirp.objects.create(text="test")
        self.assertTrue(isinstance(chirp, Chirp))
        self.assertEqual(chirp.text, "test")
