import { Component } from '@angular/core';
import { NgxTypedJsModule } from 'ngx-typed-js';

@Component({
  selector: 'app-banner',
  imports: [NgxTypedJsModule],
  templateUrl: './banner.html',
  styleUrl: './banner.scss',
})
export class Banner {
  scroll(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
