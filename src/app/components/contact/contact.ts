import { Component } from '@angular/core';
import { RevealDirective } from "../../shared/reveal.directive";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [RevealDirective, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly formspreeEndpoint = 'https://formspree.io/f/mojngewn';

  isSubmitting = false;
  submitStatus: 'idle' | 'success' | 'error' = 'idle';
  submitMessage = '';

  fieldStatus = {
    name: { touched: false, valid: false, error: '' },
    email: { touched: false, valid: false, error: '' },
    subject: { touched: false, valid: false, error: '' },
    message: { touched: false, valid: false, error: '' }
  };

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

  validateName(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value.trim();

    this.fieldStatus.name.touched = true;

    if (value.length === 0) {
      this.fieldStatus.name.valid = false;
      this.fieldStatus.name.error = 'Nome é obrigatório';
    } else if (value.length < 3) {
      this.fieldStatus.name.valid = false;
      this.fieldStatus.name.error = 'Nome deve ter pelo menos 3 caracteres';
    } else {
      this.fieldStatus.name.valid = true;
      this.fieldStatus.name.error = '';
    }
  }

  validateEmail(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value.trim();

    this.fieldStatus.email.touched = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value.length === 0) {
      this.fieldStatus.email.valid = false;
      this.fieldStatus.email.error = 'Email é obrigatório';
    } else if (!emailRegex.test(value)) {
      this.fieldStatus.email.valid = false;
      this.fieldStatus.email.error = 'Email inválido';
    } else {
      this.fieldStatus.email.valid = true;
      this.fieldStatus.email.error = '';
    }
  }

  validateSubject(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value.trim();

    this.fieldStatus.subject.touched = true;

    if (value.length === 0) {
      this.fieldStatus.subject.valid = false;
      this.fieldStatus.subject.error = 'Assunto é obrigatório';
    } else if (value.length < 5) {
      this.fieldStatus.subject.valid = false;
      this.fieldStatus.subject.error = 'Assunto deve ter pelo menos 5 caracteres';
    } else {
      this.fieldStatus.subject.valid = true;
      this.fieldStatus.subject.error = '';
    }
  }

  validateMessage(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;
    const value = textarea.value.trim();

    this.fieldStatus.message.touched = true;

    if (value.length === 0) {
      this.fieldStatus.message.valid = false;
      this.fieldStatus.message.error = 'Mensagem é obrigatória';
    } else if (value.length < 10) {
      this.fieldStatus.message.valid = false;
      this.fieldStatus.message.error = 'Mensagem deve ter pelo menos 10 caracteres';
    } else {
      this.fieldStatus.message.valid = true;
      this.fieldStatus.message.error = '';
    }
  }

  isFormValid(): boolean {
    return (
      this.fieldStatus.name.valid &&
      this.fieldStatus.email.valid &&
      this.fieldStatus.subject.valid &&
      this.fieldStatus.message.valid
    );
  }

  async sendEmail(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement | null;
    if (!form || this.isSubmitting) {
      return;
    }

    this.fieldStatus.name.touched = true;
    this.fieldStatus.email.touched = true;
    this.fieldStatus.subject.touched = true;
    this.fieldStatus.message.touched = true;

    if (!this.isFormValid()) {
      this.submitStatus = 'error';
      this.submitMessage = 'Por favor, corrija os erros no formulário.';
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

      this.fieldStatus = {
        name: { touched: false, valid: false, error: '' },
        email: { touched: false, valid: false, error: '' },
        subject: { touched: false, valid: false, error: '' },
        message: { touched: false, valid: false, error: '' }
      };
    } catch {
      this.submitStatus = 'error';
      this.submitMessage = 'Não foi possível enviar agora. Tente novamente em instantes.';
    } finally {
      this.isSubmitting = false;
    }
  }
}
