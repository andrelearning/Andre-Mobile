import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ModalController, Platform } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {


  constructor(
    public platform: Platform,
    public params: NavParams,
    public view: ViewController
  ) {

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  fecharModal() {
    this.view.dismiss();

  }

}
