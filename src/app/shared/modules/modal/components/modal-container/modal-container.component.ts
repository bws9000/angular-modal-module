import { Component, OnInit, ViewChild } from "@angular/core";

import {
  animate,
  state,
  trigger,
  style,
  transition,
} from "@angular/animations";
import { Subject } from "rxjs";
import { ModalServiceService } from "../../services/modal-service.service";
import { ModalDialogDirective } from "../../directives/modal-dialog.directive";
@Component({
  selector: "app-dialog-container",
  templateUrl: "./modal-container.component.html",
  styleUrls: ["./modal-container.component.scss"],
  animations: [
    trigger("flyInOut", [
      state("in", style({ transform: "translateY(0)" })),
      transition("void => *", [
        style({ transform: "translateY(-100%)" }),
        animate(250),
      ]),
      transition("* => void", [
        animate(100, style({ transform: "translateY(100%)" })),
      ]),
    ]),
  ],
  providers:[]
})
export class ModalContainerComponent {

  @ViewChild(ModalDialogDirective, { static: true })
  dialogHost!: ModalDialogDirective;

  formSubmittedSubject: Subject<any> = new Subject<any>();

  constructor(private modalService: ModalServiceService) {}

  open(component: any, data: any): void {
    this.modalService.setData(data);
    const dialogHost = this.dialogHost.viewContainerRef;
    dialogHost.createComponent(component);
  }
}
