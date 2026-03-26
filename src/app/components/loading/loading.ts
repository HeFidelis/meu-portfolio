import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-loading',
  imports: [],
  templateUrl: './loading.html',
  styleUrl: './loading.scss',
})
export class Loading implements OnInit, OnDestroy {
  isLoading = true;
  progress = 0;

  private interval: ReturnType<typeof setInterval> | null = null;
  private timeout: ReturnType<typeof setTimeout> | null = null;

  ngOnInit() {
    this.interval = setInterval(() => {
      this.progress += Math.random() * 30;

      if (this.progress >= 100) {
        this.progress = 100;
        this.clearTimers();
        this.timeout = setTimeout(() => { this.isLoading = false; }, 300);
      }
    }, 200);

    // Garante que termina em 3 segundos
    this.timeout = setTimeout(() => {
      this.progress = 100;
      this.clearTimers();
      setTimeout(() => { this.isLoading = false; }, 300);
    }, 3000);
  }

  private clearTimers() {
    if (this.interval) { clearInterval(this.interval); this.interval = null; }
    if (this.timeout) { clearTimeout(this.timeout); this.timeout = null; }
  }

  ngOnDestroy() {
    this.clearTimers();
  }
}
