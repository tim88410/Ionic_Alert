import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { IonicModule, IonContent, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-terms-modal',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './terms-alert.component.html',
  styleUrls: ['./terms-alert.component.scss'],
})
export class TermsModalComponent {
  @ViewChild('content') content!: IonContent;
  isChecked = false;
  scrolledToBottom = false;

  constructor(private modalCtrl: ModalController) {}

  scrollToBottom() {
    this.content.scrollToBottom(500);
  }

  onScroll(event: any) {
    const scrollElement = event.target;
    const threshold = 50;
    const reachedBottom =
      scrollElement.scrollHeight - scrollElement.scrollTop - scrollElement.clientHeight < threshold;
    this.scrolledToBottom = reachedBottom;
  }

  confirm() {
    this.modalCtrl.dismiss(true); // 同意，回傳 true
  }

  dismiss(result = false) {
    this.modalCtrl.dismiss(result);
  }
}
