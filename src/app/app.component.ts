import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

type Project = {
  title: string;
  stack: string[];
  summary: string;
  highlights: string[];
  repo?: string;
  demo?: string;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './app.html',
})
export class AppComponent {
  // 🔗 Actualiza estos enlaces
  SOCIAL = {
    email: 'mailto:laucharoman38@gmail.com',
    linkedin: 'https://www.linkedin.com/in/lautaro-sueldo-158776203/',
    github: 'https://github.com/Lautaro2700?tab=repositories',
    cv: '/assets/cv/LautaroSueldo_CV.pdf',
  } as const;

  skills = {
    backend: ['Java (Spring)', 'gRPC', 'REST', 'Oracle', 'MySQL'],
    frontend: ['Angular', 'TypeScript', 'RxJS', 'HTML/CSS'],
    devops: ['Git', 'Docker', 'CI/CD', 'Linux'],
    learning: ['Go', 'Rust', 'Python', 'AWS'],
  };

  projects: Project[] = [
    {
      title: 'Motor de Pagos – Certant S.A.',
      stack: ['Java', 'Spring', 'JBoss 7.2', 'Oracle'],
      summary: 'APIs, jobs (Quartz), wrappers/DTOs y optimizaciones SQL.',
      highlights: [
        '-35% en tiempo de consultas críticas',
        'Contratos definidos con Swagger/YAML',
      ],
      repo: '#',
      demo: '#',
    },
    {
      title: 'gRPC-Web + Angular Demo',
      stack: ['Angular', 'TypeScript', 'Envoy', 'gRPC'],
      summary:
        'Cliente Angular consumiendo microservicio gRPC vía Envoy con gateway REST.',
      highlights: ['Interceptors y tipado generado', 'Arquitectura por features'],
      repo: '#',
      demo: '#',
    },
    {
      title: 'ETL Finanzas Personales',
      stack: ['Python', 'Pandas', 'Matplotlib'],
      summary:
        'Pipeline para consolidar gastos/ahorros, KPIs TNA/TEM y reporte en PDF.',
      highlights: ['Dashboards programados', 'Dockerizado'],
      repo: '#',
      demo: '#',
    },
  ];
  today = new Date();
}
