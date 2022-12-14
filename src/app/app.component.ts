import { Component, Inject, ViewContainerRef } from '@angular/core';
import { ModalServiceService } from './shared/modules/modal/services/modal-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-tour-of-heroes';
  constructor(
    @Inject(ViewContainerRef) viewContainerRef:any,
    private modalService: ModalServiceService){
      this.modalService.setModalHost(viewContainerRef);
  }
}
