import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { SMS } from '@ionic-native/sms';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';



@Component({
        selector: 'page-contatos',
        templateUrl: 'contatos.html'
})

export class ContatosPage {

        private recado: FormGroup;

        constructor(private formBuilder: FormBuilder, private sms: SMS, 
                public navCtrl: NavController, private call: CallNumber) {
                this.recado = this.formBuilder.group({
                        remetente: ['', Validators.required],
                        mensagem: ['', Validators.required],
                });
        }
        enviarSMS() {
                this.sms.send('11960772689', this.recado.value['mensagem']+
                " Atenciosamente: "+this.recado.value['remetente']);

        }


        ligarCelular() {

                this.call.callNumber("11960772689", true)
                        .then(res => console.log('Abrindo Discagem', res))
                        .catch(err => console.log('Erro abrindo discagem', err));


        }
        ligarFixo() {

                this.call.callNumber("1156622819", true)
                        .then(res => console.log('Abrindo Discagem', res))
                        .catch(err => console.log('Erro abrindo discagem', err));


        }





}
