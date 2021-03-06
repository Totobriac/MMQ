import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: "root"
})

export class SearchMovie {

  constructor(private http: HttpClient) { }

  searchMovies(movie: any) {
    return this.http.get('http://127.0.0.1:8000/api/search_movies/' + movie.movieSearch)
  }

  searchMovie(movie: string) {
    return this.http.get('http://127.0.0.1:8000/api/search_movie/' + movie)
  }
    
  
}

