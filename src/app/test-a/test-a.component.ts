import { ApplicationRef, Component, ComponentRef, OnChanges, OnInit, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalServiceService } from '../shared/modules/modal/services/modal-service.service';
import { PopupComponent } from '../popups/popup.component';
import { ModalHostDirective } from '../shared/modules/modal/directives/modal-host.directive';


@Component({
  selector: 'app-test-a',
  templateUrl: './test-a.component.html',
  styleUrls: ['./test-a.component.scss']
})
export class TestAComponent implements OnInit {

  constructor(
    private modalService: ModalServiceService
  ) {}

  ngOnInit(): void {
    this.testOne();
  }

  testOne():void{
    this.modalService.open({
      popupComponent: PopupComponent,
      data: { 'title':'Modal Title', 'message': 'Modal Message body.' }
    });
  }


}
