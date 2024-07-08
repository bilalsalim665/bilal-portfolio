import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, signal } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';


interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

@Component({
  selector: 'app-experience-tabs',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './experience-tabs.component.html',
  styleUrl: './experience-tabs.component.scss'
})
export class ExperienceTabsComponent {

  @Output() newItemEvent = new EventEmitter<boolean>();

  readonly panelOpenState = signal(false);
  experiences: Experience[] = [
    {
      id:"01",
      role: 'Front End Developer - Angular',
      company: 'CIBC - Canada',
      duration: 'MAY 2023 - FEB 2024',
      responsibilities: [
        'Worked on Global Money Transfer and Simplii application.',
        'Used Angular as front end framework and Flexbox CSS layout for styling in SCSS',
        'I have worked on implementing WCAG (Web Content Accessibility Guidelines) AA standards by using techniques i.e. Sematic HTML elements , ARIA Attributes, Keyboard Accessibility etc.',
        'Created new offers component and integrated Rest API call in new service',
        'Used filters, pipes, authentication guards, interceptors, custom directives, RxJS features(Observables and Subjects) and routing.',
        'Utilized Angular new inject function to streamline the injection process, enhancing code readability and maintainability.',
        'I have used JENKINS for deployments',
        'I have integrated Adobe Target SDK in Angular by using AT.js 2.0 library. Received custom UI templates sent by Adobe Target API and embedded them in different sections of the page.',
        'Did documentation in agile development i.e. LLD, DIT Exit report, UAT deployment plan, RB/RF plan and implementation plan on confluence',
        'Provided support for resolving production issues and deploying builds in production',
        'I have used Angular unit test features i.e Karma and Jasmine.',
        'Experienced working on MongoDB to execute scripts for altering existing data. Added script for updating data.',
        'I have used npm for migrating to different Angular packages',
        'Optimized Angular application using change detection strategy: onPush, in templates used trackby in ngFor loop etc.'
      ]
    },
    {
      id:"02",
      role: 'Front End Web Developer - Angular',
      company: 'Frontier - USA',
      duration: 'JUL 2022 – MAR 2023',
      responsibilities: [
        'Worked on technicians job tracking application.',
        'Used Angular with Typescript as front end framework in this application.',
        'I have used SCSS as layout structure for CSS',
        'Used reactive forms and regex patterns for validations.',
        'I have used RestFul API to fetch dynamic reactive forms in Angular',
        'Used RxJS operators to exchange data with Restful APIs and handle asynchronous data stream.',
        'Handled a critical scenario of creating API call using concatMap as first API was dependent on second.',
        'Gained knowledge of NGRx state management functionality using Redux.',
        'Worked in Agile development process and used JIRA for maintaining documentation.',
        'Used Angular features i.e. lazy loading, lifecycle hooks, view encapsulation, custom directives and routeguards concepts.'
      ]
    },
    {
      id:"03",
      role: 'Front End Web Developer - Angular',
      company: 'Rogers - Canada',
      duration: 'NOV 2021 – JUL 2022',
      responsibilities: [
        'Worked on developing account search application in Angular.',
        'Used JavaScript and Typescript for developing Angular application',
        'Updated their documentation and used baseline code using agile development process.',
        'Used Lint and SonarQube for code analysis and refactoring.',
        'Uploaded Angular build on Azure pipeline',
        'Used reactive forms for validations',
        'Used flexbox design pattern to construct UI with responsive design implementation till mobile screen',
        'Developed and maintained multiple independent micro frontends using Angular, enhancing modularity and team collaboration.',
        'Integrated micro frontends using tools such as Webpack Module Federation and single-spa, ensuring seamless user experience across the application',
        'Gained experience on utilizing Angular lifecycle hooks i.e. ngOninit, ngOnchanges and ngDoCheck.',
        'Communicated with dev-ops team for angular build deployment.'
      ]
    },
    {
      id:"04",
      role: 'Principal Software Engineer - Angular/AngularJS',
      company: 'NETSOL - Pakistan',
      duration: 'DEC 2014 - SEP 2021',
      responsibilities: [
        'Focused on point-of-sale and contract management systems using Angular 5-12 and AngularJS 1.2.',
        'Integrated Google maps, Google analytics. Used UI libraries i.e. Angular Material, PrimeNG, MaterializeCSS',
        'Integrated multiple RESTful APIs to provide real-time customer data updates and interactions, enhancing the overall user experience and operational efficiency. Optimized search capability by adding debounce time and switchMap.',
        'Acted as a team lead, facilitating communication and collaboration among team members for Motolease myAccount (Angular 12).',
        'Upgraded MPA(Multi-Page Application) in PHP to SPA(single-page application) using Angular as front end NodeJS as backend.',
        'Created RESTful APIs with NodeJS and Express.js to handle data retrieval and processing for front-end applications.',
        'Integrated RESTful microservices from NodeJS servers in Angular applications, leveraging the full MEAN stack.',
        'Worked extensively with MongoDB for database operations, including data retrieval and storage.',
        'Implemented CI/CD pipelines in Azure, ensuring smooth deployments. Used Jenkins for continuous integration and deployment.',
        'Involved in all stages of software development from requirement gathering to deployment and maintenance',
        'Added security features like JWT in Angular and NodeJS for secure communication between front and backend.'
      ]
    },

  ];

  panelChangedEmit() {
    this.newItemEvent.emit(true);
  }
}
