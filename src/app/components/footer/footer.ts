import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#about' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Contato', href: '#contact' },
  ];

  socialLinks = [
    { label: 'GitHub', href: 'https://github.com/HeFidelis' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/heitorfidelis/' },
  ];
}
