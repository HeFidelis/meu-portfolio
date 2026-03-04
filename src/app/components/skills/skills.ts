import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skills = [
    { name: 'C#/.NET', level: 90 },
    { name: 'Angular', level: 90 },
    { name: 'HTML/CSS', level: 95 },
  ];
}
