import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/Models/Interfaces';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {
  @Input() new : Article;
  @Input() i;
  constructor() { }

  ngOnInit() {}

}
