import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  scrolled = false;
  isLight = false;
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  scrollToSection(event: Event, id: string) {
    event.preventDefault();

  const element = document.getElementById(id);
  if (!element) return;

  const navbarHeight = 80;
  const top = element.getBoundingClientRect().top + window.scrollY - navbarHeight;

    window.scrollTo({
      top,
      behavior: 'smooth',
    });

    this.menuOpen = false;
  }

   @HostListener('window: scroll')
  onScroll() {
    this.scrolled = window.scrollY > 50;
  }
}
