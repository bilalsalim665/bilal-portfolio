import { Component, OnInit } from '@angular/core';
import { PillMovementDirective } from '../common/directives/rotate-pill.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [PillMovementDirective,CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit{

  currentlyDragging: number | undefined;
  mouseX: number | undefined;
  mouseY: number | undefined;

  skills = ["Angular","React", "Javascript","Typescript", "php","HTML","CSS", "MySQL","MongoDB","Agile","Unit Test", "JIRA",
    "GIT", "WCAG", "NgRx", "RxJS"
  ];
  skillPositions: string[][] = [];

  ngOnInit(): void {
    for (let i = 0; i < this.skills.length; i++) {
      let pos:string[] = [i*(90/this.skills.length)+'%', ((i+1)%3)*33+'%',this.getRandomRotation()];
      if(pos[0]==='0%')
        pos[0]= '5%'
      this.skillPositions.push(pos);
    }
  }

  startDragging(i: number){
    this.currentlyDragging = i;
  }
  stopDragging(){
    this.currentlyDragging = undefined;
  }

  mouseMove(e: MouseEvent){
    if(this.currentlyDragging==undefined){ return;}
    this.skillPositions[this.currentlyDragging][0] = e.pageX-70+'px';
    this.skillPositions[this.currentlyDragging][1] = e.pageY-30+'px';
  }

  getRandomRotation(){
    let randomVal=(Math.random()*30)-15;
    return `rotate(${randomVal}deg)`;    
  }

    
}
