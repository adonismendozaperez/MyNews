import { Component, OnInit, Input } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Article } from 'src/app/Models/Interfaces';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {
  @Input() new : Article;
  @Input() i;
  constructor(
    private iab:InAppBrowser,
    private ActionSCtrl:ActionSheetController
    ) { }

  ngOnInit() {}

  ViewNew(){
    const browser = this.iab.create(this.new.url,"_system");
  }

  async GetOption(){
    const actionSheet = await this.ActionSCtrl.create({
      buttons: [ {
        text: 'Share',
        icon: 'share',
        cssClass:'action_dark',
        handler: () => {
          console.log('Share clicked');
        }
      },{
        text: 'Favorite',
        icon: 'heart',
        cssClass:'action_dark',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        cssClass:'action_dark',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
