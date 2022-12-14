import { Component, OnInit } from '@angular/core';
import { ModalServiceService } from '../shared/modules/modal/services/modal-service.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {

  public data: any;

  constructor(private modalService: ModalServiceService) {
    this.data = this.modalService.getData();
  }

  public close(): void {
    this.modalService.close();
  }

}
