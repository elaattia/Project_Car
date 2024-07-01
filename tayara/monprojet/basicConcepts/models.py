from django.db import models

class quiz(models.Model):
    Marque=models.CharField(max_length=15)
    Modèle=models.CharField(max_length=15)
    Puissance_fiscale=models.IntegerField() 
    Transmission=models.CharField(max_length=15) 
    Kilométrage=models.IntegerField()
    mise_en_circulation=models.FloatField() 
    cylindre=models.IntegerField() 
    Énergie=models.CharField(max_length=15)

    def __str__(self):
        return self.Marque, self.Modèle
# Create your models here.
