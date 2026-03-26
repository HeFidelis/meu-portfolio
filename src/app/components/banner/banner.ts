import { Component, HostListener, OnDestroy } from '@angular/core';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { RevealDirective } from "../../shared/reveal.directive";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  imports: [NgxTypedJsModule, RevealDirective, CommonModule],
  templateUrl: './banner.html',
  styleUrl: './banner.scss',
})
export class Banner implements OnDestroy {
  scroll(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  offset = 0;
  private scrollThrottle: ReturnType<typeof setTimeout> | null = null;

  @HostListener('window:scroll')
  onScroll() {
    if (this.scrollThrottle) return;
    this.scrollThrottle = setTimeout(() => {
      this.offset = window.scrollY * 0.3;
      this.scrollThrottle = null;
    }, 16); // ~60fps
  }

  ngOnDestroy() {
    if (this.scrollThrottle) clearTimeout(this.scrollThrottle);
  }

  socialLinks = [
    { iconClass: 'fa-brands fa-github', url: 'https://github.com/HeFidelis', label: 'GitHub' },
    { iconClass: 'fa-brands fa-linkedin-in', url: 'https://www.linkedin.com/in/heitorfidelis/', label: 'LinkedIn' }
  ];
}
