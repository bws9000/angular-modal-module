import {
  Component,
  ViewChild} from '@angular/core';
import { ModalServiceService } from '../../services/modal-service.service';
import { ModalDialogDirective } from '../../directives/modal-dialog.directive';

import {
  animate,
  state,
  trigger,
  style,
  transition
} from '@angular/animations';

//https://auth0.com/blog/get-better-angular-ux-using-animation-techniques/
@Component({
  selector: 'app-dialog-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateY(0)' })),
      transition('void => *', [
        style({ transform: 'translateY(-100%)' }),
        animate(250)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateY(100%)' }))
      ])
    ])
  ]
})
export class ModalContainerComponent {

  @ViewChild(ModalDialogDirective, {static: true}) dialogHost!: ModalDialogDirective;
  // @ViewChildren(AppComponent, { read: ViewContainerRef }) something: any;

  constructor(private modalService: ModalServiceService){}

  open(component:any,data:any):void {
    this.modalService.setData(data);
    const dialogHost = this.dialogHost.viewContainerRef;
    dialogHost.createComponent(component);
  }
}
