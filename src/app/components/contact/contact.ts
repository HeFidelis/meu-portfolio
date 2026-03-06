import { Component } from '@angular/core';
import { RevealDirective } from "../../shared/reveal.directive";

@Component({
  selector: 'app-contact',
  imports: [RevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly formspreeEndpoint = 'https://formspree.io/f/mojngewn';

  isSubmitting = false;
  submitStatus: 'idle' | 'success' | 'error' = 'idle';
  submitMessage = '';

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

  async sendEmail(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement | null;
    if (!form || this.isSubmitting) {
      return;
    }

    this.isSubmitting = true;
    this.submitStatus = 'idle';
    this.submitMessage = '';

    const formData = new FormData(form);

    try {
      const response = await fetch(this.formspreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Falha ao enviar mensagem');
      }

      this.submitStatus = 'success';
      this.submitMessage = 'Mensagem enviada com sucesso! Retornarei em breve.';
      form.reset();
    } catch {
      this.submitStatus = 'error';
      this.submitMessage = 'Nao foi possivel enviar agora. Tente novamente em instantes.';
    } finally {
      this.isSubmitting = false;
    }
  }
}
