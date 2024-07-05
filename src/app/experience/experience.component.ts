import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit,AfterViewInit{

  @ViewChild('canvasElement', { static: false }) canvas: ElementRef<HTMLCanvasElement> | undefined;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    this.scrollYVal = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
  }  
  private context: CanvasRenderingContext2D | undefined;
  private canvasEl: any;
  private dots:any = [];  
  scrollYVal: number = 0; 
  
  private arrayColors:string[] = ['#eee', '#545454', '#596d91', '#bb5a68', '#696541'];
  
  banner:any ;
  
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.canvasEl = this.canvas?.nativeElement;
    this.context = this.canvasEl.getContext('2d');
    this.banner = document.querySelector('.banner');
    this.setTheme();

  }  

  setTheme(){
    this.canvasEl!.width = this.canvasEl.offsetWidth;
    this.canvasEl.height = this.canvasEl.offsetHeight;
    this.initializeDots();
    this.drawDots();
  }

  initializeDots(){
    for (let index = 0; index < 50; index++) {
        this.dots.push({
            x:  Math.floor(Math.random() * this.canvasEl.width),
            y:  Math.floor(Math.random() * this.canvasEl.height),
            size: Math.random() * 3 + 5,
            color: this.arrayColors[Math.floor(Math.random()* 5)]
        });
    }    
  }

  drawDots(){
      this.dots.forEach((dot:any) => {
        this.context!.fillStyle = dot.color;
        this.context!.beginPath();
        this.context!.arc(dot.x, dot.y, dot.size, 0, Math.PI*2);
        this.context!.fill();
      })
  }

  onMouseMove(event: MouseEvent){
    this.context!.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);
    let mouse = this.getMousePosition(event);
    this.dots.forEach((dot:any) => {
        let distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);
        if(distance < 300){
          this.context!.strokeStyle = dot.color;
          this.context!.lineWidth = 1;
          this.context!.beginPath();
          this.context!.moveTo(dot.x, dot.y);
          this.context!.lineTo(mouse.x, mouse.y);
          this.context!.stroke();
        }
    });
    this.drawDots();

  }

  onMouseOut(){
    this.context!.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);
    this.drawDots();    
  }

  onResizeScreen(){
    this.context!.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);
    this.canvasEl.width = this.canvasEl.offsetWidth;
    this.canvasEl.height = this.canvasEl.offsetHeight;
    this.drawDots();
  }  
  getMousePosition(event: MouseEvent){
    return {
      x:  event.pageX - (this.banner!.getBoundingClientRect().left),
      y:  event.pageY - (this.banner!.getBoundingClientRect().top +this.scrollYVal)
    }
  }
}
