import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'Portfolio';
 
  public imageURLs: string[] = ['../assets/EliteApparel.png', '../assets/preference.png',
  '../assets/calendar.png', '../assets/director.png', '../assets/login.png',  ]

  public imageCardPoped: boolean = false;
  public imageCardPopedURL: string = "";

  @HostListener('window:scroll', ['$event']) scrollHandler(){
    this.fadeOutOnScroll();
  }

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

  //Checks if an element 
  isInView(element: HTMLElement): boolean{
    let bounding = element.getBoundingClientRect();
    if (bounding.bottom >= 0) {
      return true;
    }
    return false;
  }

  PopThisImage(URL: string){
    this.imageCardPoped = true;
    this.imageCardPopedURL = URL;
  }
}



