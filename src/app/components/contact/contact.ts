import { Component } from '@angular/core';
import { RevealDirective } from "../../shared/reveal.directive";

@Component({
  selector: 'app-contact',
  imports: [RevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  sendEmail() {
    alert('Mensagem enviada com sucesso!');
  }
}
