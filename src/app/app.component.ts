import { AnimationMetadataType, keyframes } from '@angular/animations';
import { Component, HostListener } from '@angular/core';

interface Project{
  name: string;
  url: string;
  imgUrls: string[];
  length: number;
  description: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Portfolio';
 
  public projects: Project[] = [
    {name: "EliteApparel", url: "", imgUrls: ['../assets/EliteApparel.png', ], length: 1, description: "Light weight inventory managment application" },
    {name: "CsetScheduling", url: "", imgUrls: ['../assets/calendar.png', '../assets/preference.png',
     '../assets/director.png', '../assets/login.png',], length: 4, description: "Class scheduling system for Oregon Institute of Technology's own Computer Science Enginnering Technology Department"}
  ];

  public viewProject: boolean = false;
  public poppedProject: Project = {name: "", url: "", imgUrls: [''], length: 0, description: ""};

  //Listens for scrolling to trigger fadding effect
  @HostListener('window:scroll', ['$event']) scrollHandler(){
    this.fadeOutOnScroll();
    this.viewProject = false;
  }

  //Fades out elements leaving the viewport
  fadeOutOnScroll() {
    let element = document.getElementById('header');
    if(element != null &&!this.isInView(element)){
      element = document.getElementById('AboutMe');
    }
    if(element != null &&!this.isInView(element)){
      element = document.getElementById('Skills');
    }
    if(element != null &&!this.isInView(element)){
      element = document.getElementById('Work');
    }

    if (!element) {
      return;
    }
    
    var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
    var elementHeight = element.offsetHeight;
    var scrollTop = document.documentElement.scrollTop;
    
    var opacity = 1;
    
    if (scrollTop > distanceToTop) {
      opacity = 1 - ((scrollTop - distanceToTop) / elementHeight);
    }
    
    if (opacity >= 0) {
      element.style.opacity = opacity.toString();
    }
  }

  //Checks if an element is in the viewport
  isInView(element: HTMLElement): boolean{
    let bounding = element.getBoundingClientRect();
    if (bounding.bottom >= 0) {
      return true;
    }
    return false;
  }
}



