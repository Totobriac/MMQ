import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TrailerSearchService {

  constructor(private httpClient: HttpClient) { }

  getTrailer(trailer){    
    return this.httpClient.get('http://127.0.0.1:8000/api/search_trailer/' + trailer)    
  }
}
