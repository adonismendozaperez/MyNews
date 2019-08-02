import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/Models/Interfaces';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  @Input() News : Article[] = [];
  @Input() Favorite:boolean = false;
  constructor() { }

  ngOnInit() {}

}
