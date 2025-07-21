import { Component } from '@angular/core';
import {
  AlertController,
  IonicModule,
  IonContent,
  ModalController,
} from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  showGoTop = false;
  longList = Array.from({ length: 50 }, (_, i) => `第 ${i + 1} 筆資料`);

  constructor(
    private alertController: AlertController,
    private modalController: ModalController
  ) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: '提示',
      message: '這是一個彈窗！',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      breakpoints: [0, 0.3, 0.5, 0.8],
      initialBreakpoint: 0.5,
    });
    await modal.present();
  }

  onScroll(event: any) {
    this.showGoTop = event.detail.scrollTop > 300;
  }

  scrollToTop(content: IonContent) {
    content.scrollToTop(500);
  }
}
