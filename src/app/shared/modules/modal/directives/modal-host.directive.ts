import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[modalHost]',
})
export class ModalHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {
  }
}
