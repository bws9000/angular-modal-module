import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dialogHost]',
})
export class ModalDialogDirective {
  constructor(public viewContainerRef: ViewContainerRef) {
  }
}
