import { Component } from '@angular/core';
import { RevealDirective } from "../../shared/reveal.directive";

@Component({
  selector: 'app-projects',
  imports: [RevealDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects = [
  {
    title: 'Projeto 1',
    description: 'Descrição curta do projeto',
    image: 'assets/img/project1.png',
    link: 'https://github.com/seuusername/projeto1'
  },
  ];
}
