import { Component, ViewChild } from '@angular/core';
import {
  AlertController,
  IonicModule,
  IonContent,
  ModalController,
} from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';
import { TermsModalComponent } from '../components/terms-alert.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  @ViewChild(IonContent) content!: IonContent;

  showGoTop = false;
  longList = Array.from({ length: 50 }, (_, i) => `測試scroll bar的第 ${i + 1} 筆資料`);

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

  async presentTermsModal() {
    const modal = await this.modalController.create({
      component: TermsModalComponent,
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();

    if (data) {
      console.log('同意條款');
    } else {
      console.log('用戶未同意或取消');
    }
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

  scrollToTop() {
    this.content.scrollToTop(500);
  }
}
