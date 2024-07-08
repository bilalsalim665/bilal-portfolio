import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { ExperienceTabsComponent } from './experience-tabs/experience-tabs.component';
@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ExperienceTabsComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit,AfterViewInit{

  @ViewChild('canvasElement', { static: false }) canvas: ElementRef<HTMLCanvasElement> | undefined;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    this.scrollYVal = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
  }  
  @HostListener('mousemove', ['$event']) mouseMove(event:MouseEvent) {
    // console.log(event.clientX, event.clientY);
    this.mouseEventTrack = event;
  }  
  private context: CanvasRenderingContext2D | undefined;
  private canvasEl: any | undefined;
  private dots:any = [];  
  scrollYVal: number = 0; 
  public isBrowser: boolean;
  private arrayColors:string[] = ['#eee', '#545454', '#596d91', '#bb5a68', '#696541'];
  private mouseEventTrack: MouseEvent | undefined;
  banner:any;


  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    @Inject(DOCUMENT) private document: Document    
  ){
    this.isBrowser = isPlatformBrowser(platformId);
  }
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    /* this.canvasEl = this.canvas?.nativeElement;
    this.context = this.canvasEl?.getContext('2d');
    this.banner = this.document?.querySelector('.banner');

    this.setTheme(); */

  }  

  setTheme(){
    if(this.canvasEl){
      this.canvasEl.width = this.canvasEl?.offsetWidth;
      this.canvasEl.height = this.canvasEl?.offsetHeight;
    }    

    this.initializeDots();
    this.drawDots();
  }

  initializeDots(){
    for (let index = 0; index < 50; index++) {
        this.dots.push({
            x:  Math.floor(Math.random() * this.canvasEl?.width),
            y:  Math.floor(Math.random() * this.canvasEl?.height),
            size: Math.random() * 3 + 5,
            color: this.arrayColors[Math.floor(Math.random()* 5)]
        });
    }    
  }

  drawDots(){
    if(this.context){
      this.dots.forEach((dot:any) => {
        this.context!.fillStyle = dot.color;
        this.context!.beginPath();
        this.context!.globalAlpha = 0.7;
        this.context!.arc(dot.x, dot.y, dot.size, 0, Math.PI*2);
        this.context!.fill();
      })
    }
  }

  onMouseMove(isPanelChanged: boolean){
    this.context?.clearRect(0, 0, this.canvasEl?.width, this.canvasEl?.height);
    let mouse = this.getMousePosition(this.mouseEventTrack,isPanelChanged);
    if(mouse){
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
    }

    this.drawDots();

  }

  onMouseOut(){
    this.context!.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);
    this.drawDots();    
  }

  /* onResizeScreen(){
    // if(this.canvasEl){
      this.context!.clearRect(0, 0, this.canvasEl?.width, this.canvasEl?.height);
   
      this.canvasEl.width = this.canvasEl?.offsetWidth;
      this.canvasEl.height = this.canvasEl?.offsetHeight;      
    // }
 
    this.drawDots();
  } */  
  getMousePosition(event: MouseEvent | undefined,isPanelChanged:boolean){
    // console.log("clientY: ",this.mouseEventTrack?.clientY);
    /* console.log("offsetY: ",this.mouseEventTrack?.offsetY);
    console.log("pageY: ",this.mouseEventTrack?.pageY);
    console.log("scrollYVal: ",this.scrollYVal); */
    if(event){
    let yVal = event.pageY - 
    (this.banner!.getBoundingClientRect().top +this.scrollYVal+300);
    let obj = {
      x:  event.pageX - (this.banner!.getBoundingClientRect().left),
      y:  yVal
    };
    return obj;
    }
    else{
      return {
        x:  0,
        y:  0
      }      
    }
  }
  panelChanged(newItem: boolean){  
    // this.context!.clearRect(0, 0, this.canvasEl?.width, this.canvasEl?.height);
    /* this.canvasEl = this.canvas?.nativeElement;
    this.context = this.canvasEl?.getContext('2d');
    this.banner = this.document?.querySelector('.banner');

    this.setTheme();   */
    // this.drawDots(); 

    /* this.initializeDots();
    this.drawDots();    
    this.onMouseMove(true); */
    // console.log("IN THIS",this.mouseEventTrack)
  }

}
