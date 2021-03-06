import { Component, OnInit, Input } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Article } from 'src/app/Models/Interfaces';
import { ActionSheetController, ToastController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { LocaldataService } from 'src/app/Services/localdata.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {
  @Input() new : Article;
  @Input() i;
  @Input() Favorite:boolean = false;
  
  constructor(
    private iab:InAppBrowser,
    private ActionSCtrl:ActionSheetController,
    private socialSharing:SocialSharing,
    private localData:LocaldataService,
    private toastCtrl:ToastController
    ) { }

  ngOnInit() {}

  ViewNew(){
    const browser = this.iab.create(this.new.url,"_system");
  }

  async GetOption(){
    
    let FavoriteOrDelete;
    if(this.Favorite){
      //BorrarFavorito
      FavoriteOrDelete = {
        text: 'Delete Favorite',
        icon: 'trash',
        cssClass:'action_dark',
        handler: async () => {
          this.localData.DeleteNews(this.new);
          const toast = await this.toastCtrl.create({
            message: 'Favorite has Delete.',
            position: 'top',
            color: 'primary',
            duration: 2000
          });
          toast.present();
        }
      }
    }
    else{
      FavoriteOrDelete = {
        text: 'Favorite',
        icon: 'heart',
        cssClass:'action_dark',
        handler: async () => {
          this.localData.SaveNews(this.new);
          const toast = await this.toastCtrl.create({
            message: 'save in Favorite.',
            position: 'top',
            color: 'primary',
            duration: 2000
          });
          toast.present();
        }
      }
    }
    const actionSheet = await this.ActionSCtrl.create({
      buttons: [ {
        text: 'Share',
        icon: 'share',
        cssClass:'action_dark',
        handler: () => {
          this.socialSharing.share(
            this.new.title,
            this.new.source.name,
            '',
            this.new.url
          );
        }
      },
        FavoriteOrDelete
      , {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        cssClass:'action_dark',
        handler: () => {
        }
      }]
    });
    await actionSheet.present();
  }
}
