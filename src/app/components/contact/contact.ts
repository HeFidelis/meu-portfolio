import { Component } from '@angular/core';
import { RevealDirective } from "../../shared/reveal.directive";

@Component({
  selector: 'app-contact',
  imports: [RevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  contactInfo = [
    {
      icon: 'fa-solid fa-envelope',
      label: 'Email',
      value: 'heitorfidelis81@gmail.com',
      link: 'mailto:seuemail@gmail.com'
    },
    {
      icon: 'fa-solid fa-phone',
      label: 'Telefone',
      value: '+55 (67) 99248-0610',
      link: 'tel:+5567992480610'
    },
    {
      icon: 'fa-solid fa-location-dot',
      label: 'Localização',
      value: 'Campo Grande - MS',
      link: null
    }
  ];

  sendEmail() {
    alert('Mensagem enviada com sucesso!');
  }
}
