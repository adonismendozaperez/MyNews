import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../Models/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class LocaldataService {
  news:Article[] = []
  constructor(private storage:Storage) { 
    this.Favorites();
  }

  SaveNews(n: Article){
    const exits = this.news.find(nw => nw.title === n.title);
    if(!exits){
      this.news.unshift(n);
      this.storage.set('Favorites', this.news);
    }
  }

  async Favorites(){
    const fav = await  this.storage.get('Favorites');
    if(fav){
      this.news = fav;
    }
    else{
      this.news = [];
    }
  }

  DeleteNews(n: Article){
    this.news = this.news.filter(nw => nw.title !== n.title);
    this.storage.set('Favorites',this.news)
  }
}
