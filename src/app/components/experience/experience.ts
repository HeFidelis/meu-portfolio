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
      period: 'Fevereiro 2026 - Até o momento',
      status: 'Atual',
      position: 'Desenvolvedor FullStack Jr.',
      company: 'Buildbox IT Solutions',
      location: 'Remoto',
      description: 'Responsável por atualizar e implementar aplicativos mobile e aplicações backend (microsserviços)',
      technologies: ['C#', 'ASP.NET', 'SQL Server', 'Azure', 'TypeScript', 'Angular']
    },
    {
      period: 'Outubro 2025 - Março 2026',
      status: 'Anterior',
      position: 'Estagiário',
      company: 'Nelson Wilians Advogados',
      location: 'Campo Grande - MS',
      description: 'Estagiário no setor de automação da empresa, responsável por auxiliar no monitoramento de robôs para automatizar processos jurídicos',
      technologies: ['Pacote Office', 'Python']
    }
  ];
}
