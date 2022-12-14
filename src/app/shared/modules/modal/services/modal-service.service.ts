import { DOCUMENT } from '@angular/common';
import { ApplicationRef, ComponentFactoryResolver, ComponentRef, ElementRef, Inject, Injectable, OnInit, Renderer2, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ModalContainerComponent } from '../components/modal-container/modal-container.component';
import { ModalModule } from '../modal.module';

interface IModal{
  data:any,
  popupComponent:any
}

@Injectable()
export class ModalServiceService implements OnInit {
  public modalHost: ViewContainerRef | undefined;
  private activeModal: ComponentRef<ModalContainerComponent> | undefined;
  public activeModalVCR: ViewContainerRef | undefined;
  public data: any;
  private popup:any;

  constructor() {}

  setModalHost(modalHost:ViewContainerRef):void{
    this.modalHost = modalHost;
  }
  ngOnInit(): void {}

  public setContainerHost(){
    this.modalHost?.clear();
    this.activeModal = this.modalHost?.createComponent(ModalContainerComponent);
  }

  open(modal:IModal):void{
    this.data = modal.data;
    this.popup = modal.popupComponent;

    this.setContainerHost();
    this.activeModal?.instance.open(this.popup,this.data);
  }

  public close():void{
    this.data = {};
    this.activeModal?.destroy();
  }

  public setData(data:any):void{
    this.data = data;
  }
  public getData():any{
    return this.data;
  }
}
