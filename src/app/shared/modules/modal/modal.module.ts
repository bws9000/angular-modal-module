import { Host, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDialogDirective } from './directives/modal-dialog.directive';
import { ModalContainerComponent } from './components/modal-container/modal-container.component';
import { ModalHostDirective } from './directives/modal-host.directive';
import { HostContainerComponent } from './components/host-container/host-container.component';
import { ModalServiceService } from './services/modal-service.service';

@NgModule({
  declarations: [
    HostContainerComponent,
    ModalContainerComponent,
    ModalDialogDirective,
    ModalHostDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HostContainerComponent
  ],
  entryComponents:[], //deprecated since 9?
  providers: [ModalServiceService],
})
export class ModalModule { }
