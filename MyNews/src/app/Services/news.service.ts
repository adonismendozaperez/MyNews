import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ResponseTopHeadLine } from 'src/app/Models/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }

  getTopHeadLines(){
    return this.http
      .get<ResponseTopHeadLine>(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${environment.apiKey}`);
  }

}
