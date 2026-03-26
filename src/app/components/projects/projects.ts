import { Component, HostListener } from '@angular/core';
import { RevealDirective } from "../../shared/reveal.directive";

@Component({
  selector: 'app-projects',
  imports: [RevealDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {

  selectedProject: any = null;

  projects = [
    {
      title: 'PediVet',
      description: 'Sistema de agendamento veterinário',
      image: 'assets/project1.jpg',
      github: '#',
      demo: '#'
    },
    {
      title: 'Clean Architecture API',
      description: 'API .NET com DDD e JWT',
      image: 'assets/project2.jpg',
      github: '#',
      demo: '#'
    }
  ];

  open(project: any) {
    this.selectedProject = project;
  }

  close() {
    this.selectedProject = null;
  }

  @HostListener('document:keydown.escape')
  onEscKey() {
    this.close();
  }
}
