import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  imports: [],
  templateUrl: './scroll-top.html',
  styleUrl: './scroll-top.scss',
})
export class ScrollTop {
  isVisible = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isVisible = window.scrollY > 400;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
