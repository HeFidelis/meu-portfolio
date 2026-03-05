import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-skills',
  imports: [RevealDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  technologies = [
    { name: 'C#', iconClass: 'fa-solid fa-code' },
    { name: '.NET', iconClass: 'fa-solid fa-code' },
    { name: 'Angular', iconClass: 'fa-brands fa-angular' },
    { name: 'TypeScript', iconClass: 'fa-solid fa-code' },
    { name: 'Node.js', iconClass: 'fa-brands fa-node-js' },
    { name: 'SQL Server', iconClass: 'fa-solid fa-database' },
    { name: 'Git', iconClass: 'fa-brands fa-git-alt' },
  ];
}
