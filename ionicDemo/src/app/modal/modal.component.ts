import { Component } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './modal.component.html',
  // styleUrls: ['./modal.component.scss'], // 如果你沒使用 SCSS 可以註解掉
})
export class ModalComponent {
  constructor(private modalController: ModalController) {}

  dismiss() {
    this.modalController.dismiss();
  }
}
