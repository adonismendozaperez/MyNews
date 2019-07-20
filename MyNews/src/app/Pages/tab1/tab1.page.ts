import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/Services/news.service';
import { Article } from 'src/app/Models/Interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  //Variables
  News:Article[] = [];

  constructor(private NewsServices:NewsService) {}

  ngOnInit(): void {
    this.NewsServices.getTopHeadLines()
      .subscribe(resp =>{
        this.News.push(...resp.articles);
      })
  }

}
