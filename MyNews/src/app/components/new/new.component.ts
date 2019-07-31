import { Component, OnInit, Input } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Article } from 'src/app/Models/Interfaces';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {
  @Input() new : Article;
  @Input() i;
  constructor(private iab:InAppBrowser) { }

  ngOnInit() {}

  ViewNew(){
    //console.log('Url: ',this.new.url)
    const browser = this.iab.create(this.new.url,"_system");
  }

}
