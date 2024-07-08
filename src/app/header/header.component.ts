import { Component } from '@angular/core';
import { ExperienceTabsComponent } from '../experience/experience-tabs/experience-tabs.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ExperienceTabsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  someVariable = '&#x1F600;'

}
