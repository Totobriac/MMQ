import requests
from django.http import HttpResponse
from django.views import View
from rest_framework.decorators import api_view
from django.http import JsonResponse
import subprocess
import json

class MoviesSearch(View):

    def get(self, request, movie):
        movies_list = []
        for page in range(1,3):
            search_url = "https://api.themoviedb.org/3/search/movie?api_key=137e8b3a07e487eeeaa6f211207f674a&language=en-US&query=" + movie + "&page=" + str(page) + "&include_adult=false"
            response = requests.get(search_url)
            json_data = json.loads(response.text)
            print(json_data)
        
            for i in json_data["results"]:
                if any(j in i["genre_ids"] for j in [16, 99, 10402, 10770]) or i["vote_count"] < 150:
                    pass
                else: movies_list.append({"poster":i["poster_path"], "title":i["original_title"]})
        return JsonResponse(movies_list, safe=False)
            

class MovieSearch(View):

    def get(self, request, movie):
        search_url = "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/" + movie
        headers = {
            'x-rapidapi-key': "3c90722e1fmshd3624c65becfb47p1d49a9jsn722fc9909dc4",
            'x-rapidapi-host': "imdb-internet-movie-database-unofficial.p.rapidapi.com"
            }
        response = requests.get( search_url, headers=headers)
        return HttpResponse(response)

        
class ActorsSearch(View):

    def get(self, request, actors):
        actorPicUrl= []
        actors_list = actors.split('-')              
        subscription_key = "9dc015a3a15c45abb05f88bcea641c2d"
        search_url = "https://api.bing.microsoft.com/v7.0/images/search"
        headers = {"Ocp-Apim-Subscription-Key" : subscription_key}
        for actor in actors_list:
            response = requests.get(search_url, headers=headers, params={"q": actor, "count": "10"})
            search_results = response.json()            
            url_list = [val["thumbnailUrl"] for val in search_results["value"]]
            actorPicUrl.append(url_list)
        return JsonResponse(actorPicUrl, safe=False)


class TrailerSearch(View):
    
    def get(self, request, trailer):
        video_src = subprocess.run(["youtube-dl", "-g", "https://www.imdb.com/videoplayer/" + trailer], encoding='utf-8', stdout=subprocess.PIPE)
        print(video_src)
        return JsonResponse(video_src.stdout, safe=False)