import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Contact } from './components/contact/contact';
import { Banner } from './components/banner/banner';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    Contact,
    Banner,
    About,
    Projects,
    Skills,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  scroll(id: string) {
    document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
  }
}
