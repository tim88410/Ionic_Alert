import { Component } from '@angular/core';
import { ModalController, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  durations = ['3個月', '6個月', '9個月'];

  constructor(private modalCtrl: ModalController) {}

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
