import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  imports: [],
  templateUrl: './loading.html',
  styleUrl: './loading.scss',
})
export class Loading implements OnInit {
  isLoading = true;
  progress = 0;

  ngOnInit() {
    // Simula progresso incremental
    const interval = setInterval(() => {
      this.progress += Math.random() * 30;

      if (this.progress >= 100) {
        this.progress = 100;
        clearInterval(interval);

        // Aguarda um pouco antes de esconder
        setTimeout(() => {
          this.isLoading = false;
        }, 300);
      }
    }, 200);

    // Garante que termina em 3 segundos
    setTimeout(() => {
      this.progress = 100;
      clearInterval(interval);

      setTimeout(() => {
        this.isLoading = false;
      }, 300);
    }, 3000);
  }
}
