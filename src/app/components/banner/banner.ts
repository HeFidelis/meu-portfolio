import { Component, HostListener } from '@angular/core';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { RevealDirective } from "../../shared/reveal.directive";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  imports: [
          NgxTypedJsModule,
          RevealDirective,
          CommonModule
        ],
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

    socialLinks = [
    { iconClass: 'fa-brands fa-github', url: 'https://github.com/HeFidelis', label: 'GitHub' },
    { iconClass: 'fa-brands fa-linkedin-in', url: 'https://www.linkedin.com/feed/', label: 'LinkedIn' }
  ];
}
