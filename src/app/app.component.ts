import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(
    private viewContainer: ViewContainerRef,
    private cfr: ComponentFactoryResolver) {}

  async lazyLoad() {}
}















/*
git clean -f && git co -f .
ng g c Lazy -m Lazy -t -s
ng serve --port 4111
const {LazyComponent} = await import('./lazy/lazy.component');
this.vcr.createComponent(this.cfr.resolveComponentFactory(LazyComponent));
*/