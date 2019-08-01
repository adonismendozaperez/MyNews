import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../Models/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class LocaldataService {
  news:Article[] = []
  constructor(private storage:Storage) { }

  SaveNews(n: Article){
    const exits = this.news.find(nw => nw.title === n.title);
    if(!exits){
      this.news.unshift(n);
      this.storage.set('Favorites', this.news);
    }
  }

  Favorites(){

  }
}
