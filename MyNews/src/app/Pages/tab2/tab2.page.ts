import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NewsService } from 'src/app/Services/news.service';
import { Article } from 'src/app/Models/Interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page  implements OnInit{
  @ViewChild(IonSegment) segment : IonSegment;
 //Variables
  News:Article[] = [];
  Category =[
    "business", "entertainment", "general", "health", "science", "sports", "technology"
  ]

  constructor(private NewsServices:NewsService) {}

  ngOnInit(){
    this.segment.value = this.Category[0];
    this.getCategory(this.Category[0]);
  }

  getCategory(category) {
    this.News = [];
    this.NewsServices.getTopHeadLinesByCategory(category)
      .subscribe(resp =>{
        this.News.push(...resp.articles);
      })
  }
}
