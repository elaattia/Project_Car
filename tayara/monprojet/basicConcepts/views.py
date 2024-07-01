from django.shortcuts import render
from django.http import JsonResponse
import json
import pickle
import requests
#from django.views.decorators.csrf import csrf_protect
from django.views.decorators.csrf import ensure_csrf_cookie
import os
from django.conf import settings  # Importer settings pour accéder à BASE_DIR
import pandas as pd
#from django.http import HttpResponse
import pickle 
def welcome(request ):
    #return HttpResponse("hello world")
    return render(request,"index.html")

def User(request):
    username= request.GET["username"]
    #print(username)
    #pass the name into the web page
    return render(request,"user.html",{"name" : username})


def home(request ):
    #return HttpResponse("hello world")
    return render(request,"main.html")

def result(request):
    if request.method == 'GET':
        Marque = request.GET.get("marque")
        Modèle = request.GET.get("modele")
        Énergie = request.GET.get("carburant")
        mise_en_circulation = int(request.GET.get("mise_en_circulation"))
        Puissance_fiscale = int(request.GET.get("Puissance_fiscale"))
        Kilométrage = float(request.GET.get("kilometrage"))
        Carrosseie = request.GET.get("Carrosseie")
        cylindre = int(request.GET.get("cylindre"))
        Transmission = request.GET.get("Transmission")
        
        result = getPredictions(Marque, Modèle, Puissance_fiscale, Transmission, Kilométrage, mise_en_circulation, Carrosseie, cylindre, Énergie)

        return render(request, "result.html", {"result": result})

#def getPredictions(marque,modele,carburant,boiteVitesse,mise_en_circulation,kilometrage):
    #model=pickle.load(open("ml_model.sav","rb") )
    #scaled=pickle.load(open("acaler.sav","rb") )
    #prediction =model.predict(scaled.transform([
    #  marque,modele,carburant,boiteVitesse,mise_en_circulation,kilometrage
    #]))
    #return prediction

import pickle

def getPredictions(Marque, 	Modèle,Puissance_fiscale,Transmission,Kilométrage, mise_en_circulation,Carrosserie, kilometrage,cylindre	,Énergie):
    # Charger le modèle depuis le fichier pickle
    with open("modele.pkl", "rb") as f:
        model = pickle.load(f)
    
    # Effectuer les prétraitements nécessaires sur les données d'entrée
    data = [[Marque,Modèle,Puissance_fiscale,Transmission,Kilométrage, mise_en_circulation,Carrosserie, kilometrage,cylindre	,Énergie]]
    
    # Effectuer des prédictions avec le modèle chargé
    prediction = model.predict(data)
    
    return prediction


#@csrf_protect
@ensure_csrf_cookie
def test_receive_json_data_view(request):
    prediction = None
    
    if request.method == 'POST':
        try:
            # Charger les données JSON envoyées depuis le frontend
            json_data = json.loads(request.body)

            # Extraire les attributs du modèle de voiture du JSON
            marque = json_data.get('marque')
            modele = json_data.get('modele')
            puissance_fiscale = json_data.get('Puissance_fiscale')
            transmission = json_data.get('Transmission')
            kilometrage = json_data.get('kilometresParcourus')
            mise_en_circulation = json_data.get('dateMiseEnCirculation')
            carrosserie = json_data.get('Carrosserie')
            cylindre = json_data.get('cylindre')
            energie = json_data.get('carburant')

            # Charger le modèle de prédiction depuis le fichier pickle
            #with open("./savedModels/modele.pkl", "rb") as f:
                #model = pickle.load(f)
            
            # Effectuer les prétraitements nécessaires sur les données d'entrée
            data = [[marque, modele, puissance_fiscale, transmission, kilometrage, mise_en_circulation, carrosserie, cylindre, energie]]
            # Spécifier le chemin absolu vers le fichier modele.pkl
            modele_path = os.path.join(settings.BASE_DIR, 'savedModels', 'modele.pkl')
            

            # Créer un dictionnaire avec les données
            data_dict = {
                'Marque': [marque],
                'Modèle': [modele],
                 'Puissance fiscale': [puissance_fiscale],
                'Transmission': [transmission],
                'Kilométrage': [kilometrage],
                'Mise en circulation': [mise_en_circulation],
                'Carrosserie': [carrosserie],
                'cylindre': [cylindre],
                'Énergie': [energie]
                }
                    

            # Convertir le dictionnaire en DataFrame
            df = pd.DataFrame(data_dict)


            # Vérifier si le fichier existe
            if os.path.exists(modele_path):
                # Charger le modèle de prédiction depuis le fichier pickle
                with open(modele_path, "rb") as f:
                    model = pickle.load(f)
            else:
                # Gérer le cas où le fichier n'existe pas
                return JsonResponse({'error': 'Le fichier modele.pkl est introuvable'}, status=404)
            # Effectuer des prédictions avec le modèle chargé
            #prediction = model.predict(data)
            prediction = model.predict(df)
            # Convertir le tableau numpy en une liste Python
            prediction_list = prediction.tolist()
            # Répondre avec une réponse JSON appropriée
            return JsonResponse({'success': True, 'price': prediction_list})
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Données JSON malformées'}, status=400)
    elif request.method == 'GET':
        return JsonResponse({'message': 'This is a GET request'})
   
    else:
        return JsonResponse({'error': 'Méthode non autorisée'}, status=405)





import os
import json
from django.http import JsonResponse
from django.conf import settings

@ensure_csrf_cookie
def test_receive_json_data_view1(request):
    
    if request.method == 'POST':
        try:
            # Charger les données JSON envoyées depuis le frontend
            json_data = json.loads(request.body)

            # Extraire les attributs du modèle de voiture du JSON
           

            # Charger le modèle de prédiction depuis le fichier pickle
          

            # Vérifier si le fichier existe
            
            # Effectuer des prédictions avec le modèle chargé
           
           

            # Stocker les données JSON dans un fichier
            json_file_path = os.path.join(settings.BASE_DIR, 'predicted_prices.json')
            with open(json_file_path, 'w') as json_file:
                json.dump(json_data, json_file)
            
            #prediction_list = None
    
            # Ouvrir le fichier predicted_price.json
            json_file_path = os.path.join(settings.BASE_DIR, 'predicted_price.json')
            if os.path.exists(json_file_path):
                with open(json_file_path, 'r') as json_file:
                    # Lire les données JSON du fichier
                    json_data = json.load(json_file)

                    marque = json_data.get('marque')
                    modele = json_data.get('modele')
                    puissance_fiscale = json_data.get('Puissance_fiscale')
                    transmission = json_data.get('Transmission')
                    kilometrage = json_data.get('kilometresParcourus')
                    mise_en_circulation = json_data.get('dateMiseEnCirculation')
                    carrosserie = json_data.get('Carrosserie')
                    cylindre = json_data.get('cylindre')
                    energie = json_data.get('carburant')

                # Charger le modèle de prédiction depuis le fichier pickle
                modele_path = os.path.join(settings.BASE_DIR, 'savedModels', 'modele.pkl')

                # Effectuer les prétraitements nécessaires sur les données d'entrée
                data = [[marque, modele, puissance_fiscale, transmission, kilometrage, mise_en_circulation, carrosserie, cylindre, energie]]

                # Créer un dictionnaire avec les données
                data_dict = {
                    'Marque': [marque],
                    'Modèle': [modele],
                    'Puissance fiscale': [puissance_fiscale],
                    'Transmission': [transmission],
                    'Kilométrage': [kilometrage],
                    'Mise en circulation': [mise_en_circulation],
                    'Carrosserie': [carrosserie],
                    'cylindre': [cylindre],
                    'Énergie': [energie]
                }

                # Convertir le dictionnaire en DataFrame
                df = pd.DataFrame(data_dict)

                # Vérifier si le fichier existe
                if os.path.exists(modele_path):
                    # Charger le modèle de prédiction depuis le fichier pickle
                    with open(modele_path, "rb") as f:
                        model = pickle.load(f)
                    
                else:
                # Si le fichier modèle n'existe pas, renvoyer une erreur
                    return JsonResponse({'error': 'Le fichier modèle.pkl est introuvable'}, status=404)
                prediction = model.predict(df)
                # Convertir le tableau numpy en une liste Python
                prediction_list = prediction.tolist()
                
                return JsonResponse({'success': True, 'price': prediction_list}, status=200)
  
  
            
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Données JSON malformées'}, status=400)
    elif request.method == 'GET':
        return JsonResponse({'message': 'This is a GET request'})
    else:
        return JsonResponse({'error': 'Méthode non autorisée'}, status=405)
    
@ensure_csrf_cookie
def test_receive_json_data_view2(request=None):
    prediction_list = None
    
    # Ouvrir le fichier predicted_price.json
    json_file_path = os.path.join(settings.BASE_DIR, 'predicted_price.json')
    if os.path.exists(json_file_path):
        with open(json_file_path, 'r') as json_file:
            # Lire les données JSON du fichier
            json_data = json.load(json_file)

            marque = json_data.get('marque')
            modele = json_data.get('modele')
            puissance_fiscale = json_data.get('Puissance_fiscale')
            transmission = json_data.get('Transmission')
            kilometrage = json_data.get('kilometresParcourus')
            mise_en_circulation = json_data.get('dateMiseEnCirculation')
            carrosserie = json_data.get('Carrosserie')
            cylindre = json_data.get('cylindre')
            energie = json_data.get('carburant')

        # Charger le modèle de prédiction depuis le fichier pickle
        modele_path = os.path.join(settings.BASE_DIR, 'savedModels', 'modele.pkl')

        # Effectuer les prétraitements nécessaires sur les données d'entrée
        data = [[marque, modele, puissance_fiscale, transmission, kilometrage, mise_en_circulation, carrosserie, cylindre, energie]]

        # Créer un dictionnaire avec les données
        data_dict = {
            'Marque': [marque],
            'Modèle': [modele],
            'Puissance fiscale': [puissance_fiscale],
            'Transmission': [transmission],
            'Kilométrage': [kilometrage],
            'Mise en circulation': [mise_en_circulation],
            'Carrosserie': [carrosserie],
            'cylindre': [cylindre],
            'Énergie': [energie]
        }

        # Convertir le dictionnaire en DataFrame
        df = pd.DataFrame(data_dict)

        # Vérifier si le fichier existe
        if os.path.exists(modele_path):
            # Charger le modèle de prédiction depuis le fichier pickle
            with open(modele_path, "rb") as f:
                model = pickle.load(f)
            prediction = model.predict(df)
            # Convertir le tableau numpy en une liste Python
            prediction_list = prediction.tolist()
        else:
            # Si le fichier modèle n'existe pas, renvoyer une erreur
            return JsonResponse({'error': 'Le fichier modèle.pkl est introuvable'}, status=404)

    return prediction_list



@ensure_csrf_cookie
def test_receive_json_data_view3(request):
    if request.method == 'POST':
        try:
            # Charger les données JSON envoyées depuis le frontend
            json_data = json.loads(request.body)

            # Extraire les attributs du modèle de voiture du JSON
            marque = json_data.get('marque')
            modele = json_data.get('modele')
            puissance_fiscale = json_data.get('Puissance_fiscale')
            transmission = json_data.get('Transmission')
            kilometrage = json_data.get('kilometresParcourus')
            mise_en_circulation = json_data.get('dateMiseEnCirculation')
            carrosserie = json_data.get('Carrosserie')
            cylindre = json_data.get('cylindre')
            energie = json_data.get('carburant')

            # Charger le modèle de prédiction depuis le fichier pickle
          
            # Vérifier si le fichier existe
            
            # Effectuer des prédictions avec le modèle chargé
           
           

            # Stocker les données JSON dans un fichier
            json_file_path = os.path.join(settings.BASE_DIR, 'predicted_prices.json')
            with open(json_file_path, 'w') as json_file:
                json.dump(json_data, json_file)

             # Ouvrir le fichier predicted_price.json
            if os.path.exists(json_file_path):
                with open(json_file_path, 'r') as json_file:
                    # Lire les données JSON du fichier
                    json_data = json.load(json_file)

                    marque = json_data.get('marque')
                    modele = json_data.get('modele')
                    puissance_fiscale = json_data.get('Puissance fiscale')
                    transmission = json_data.get('Transmission')
                    kilometrage = json_data.get('kilometresParcourus')
                    mise_en_circulation = json_data.get('dateMiseEnCirculation')
                    carrosserie = json_data.get('Carrosserie')
                    cylindre = json_data.get('cylindre')
                    energie = json_data.get('carburant')

                # Charger le modèle de prédiction depuis le fichier pickle
                #with open("./savedModels/modele.pkl", "rb") as f:
                    #model = pickle.load(f)
                
                # Effectuer les prétraitements nécessaires sur les données d'entrée
                data = [[marque, modele, puissance_fiscale, transmission, kilometrage, mise_en_circulation, carrosserie, cylindre, energie]]
                # Spécifier le chemin absolu vers le fichier modele.pkl
                modele_path = os.path.join(settings.BASE_DIR, 'savedModels', 'modele.pkl')
                

                # Créer un dictionnaire avec les données
                data_dict = {
                    'Marque': [marque],
                    'Modèle': [modele],
                    'Puissance fiscale': [puissance_fiscale],
                    'Transmission': [transmission],
                    'Kilométrage': [kilometrage],
                    'Mise en circulation': [mise_en_circulation],
                    'Carrosserie': [carrosserie],
                    'cylindre': [cylindre],
                    'Énergie': [energie]
                    }
                        

                # Convertir le dictionnaire en DataFrame
                df = pd.DataFrame(data_dict)


                # Vérifier si le fichier existe
                if os.path.exists(modele_path):
                    # Charger le modèle de prédiction depuis le fichier pickle
                    with open(modele_path, "rb") as f:
                        model = pickle.load(f)
                else:
                    # Gérer le cas où le fichier n'existe pas
                    return JsonResponse({'error': 'Le fichier modele.pkl est introuvable'}, status=404)
                # Effectuer des prédictions avec le modèle chargé
                #prediction = model.predict(data)
                prediction = model.predict(df)
                # Convertir le tableau numpy en une liste Python
                prediction_list = prediction.tolist()
                # Répondre avec une réponse JSON appropriée
                return JsonResponse({'success': True, 'price': prediction_list})
            else:
                return JsonResponse({'error': 'Méthode non autorisée'}, status=405)
        
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Données JSON malformées'}, status=400)
        
        
    elif request.method == 'GET':
        return JsonResponse({'message': 'This is a GET request'})
    else:
        return JsonResponse({'error': 'Méthode non autorisée'}, status=405)
    

#def resultprice(request):
    #if request.method == 'POST':
        #we will send the price
     #   a

    #elif request.method == 'GET':
        #we will save the data/obj coming from front end 



