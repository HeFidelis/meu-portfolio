import { Component, HostListener } from '@angular/core';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { RevealDirective } from "../../shared/reveal.directive";

@Component({
  selector: 'app-banner',
  imports: [NgxTypedJsModule, RevealDirective],
  templateUrl: './banner.html',
  styleUrl: './banner.scss',
})
export class Banner {
  scroll(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  offset = 0;

  @HostListener('window: scroll')
  onScroll() {
    this.offset = window.scrollY * 0.3;
  }
}
