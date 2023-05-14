import {
  ApplicationRef,
  ComponentRef,
  Injectable,
  ViewContainerRef,
} from '@angular/core';
import { ModalContainerComponent } from '../components/modal-container/modal-container.component';
import { NavigationEnd, Router } from '@angular/router';

interface IModal {
  data: any;
  popupComponent: any;
}

@Injectable()
export class ModalServiceService {
  public modalHost: ViewContainerRef | undefined;
  public activeModal: ComponentRef<ModalContainerComponent> | undefined;
  public activeModalVCR: ViewContainerRef | undefined;
  public data: any;
  private popup: any;

  constructor(private router: Router, private appRef: ApplicationRef) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.close();
      }
    });
  }

  setModalHost(modalHost: ViewContainerRef): void {
    this.modalHost = modalHost;
  }

  private async setContainerHost() {
    this.modalHost?.clear();
    this.activeModal = this.modalHost?.createComponent(ModalContainerComponent);
  }

  open(modal: IModal): Promise<any> {
    return new Promise(async (resolve) => {
      setTimeout(async () => {
        this.data = modal.data;
        this.popup = modal.popupComponent;
        await this.setContainerHost();
        this.setContainerHost();
        this.activeModal.instance.open(this.popup, this.data);
        resolve(this.activeModal.instance);
      });
    });
  }

  getComponentInstance(): any {
    return this.activeModal.instance;
  }

  public close(): void {
    this.data = {};
    this.activeModal?.destroy();
  }

  public setData(data: any): void {
    this.data = data;
  }
  public getData(): any {
    return this.data;
  }
}
