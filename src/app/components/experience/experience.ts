import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-experience',
  imports: [RevealDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  experiences = [
    {
      period: 'Fevereiro 2026 - Atual',
      status: 'Atual',
      position: 'Desenvolvedor Full Stack',
      company: 'Buildbox IT Solutions',
      location: 'Remoto',
      description: 'Responsável por atualizar e implementar aplicativos mobile e aplicações backend (microsserviços)',
      technologies: ['React Native', 'Expo', 'Tamagui', 'Zustand', 'Node.js', 'NestJS', 'Firebase', 'Azure']
    },
    {
      period: 'Abril 2022 - Janeiro 2026',
      status: 'Recente',
      position: 'Autônomo',
      company: 'Projetos Freelance',
      location: 'Remoto',
      description: 'Desenvolvimento de aplicações web e mobile. Consultoria em arquitetura de sistemas e otimização de performance.',
      technologies: ['Angular', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'MongoDB']
    },
    {
      period: 'Junho 2021 - Março 2022',
      status: 'Anterior',
      position: 'Desenvolvedor Junior',
      company: 'Tech Solutions',
      location: 'Campo Grande - MS',
      description: 'Desenvolvimento frontend com foco em componentes reutilizáveis e boas práticas de código limpo.',
      technologies: ['Angular', 'HTML/CSS', 'TypeScript', 'REST API']
    }
  ];
}
