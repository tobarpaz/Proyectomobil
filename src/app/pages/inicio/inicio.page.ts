import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController, IonCard } from '@ionic/angular';
import type { Animation } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  @ViewChild(IonCard, { read: ElementRef })
  card!: ElementRef<HTMLIonCardElement>;

  private animation!: Animation;

  constructor(private router:Router, private animationCtrl: AnimationController) { }
  
  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(document.querySelectorAll("ion-button"))
      .duration(3000)
      .iterations(Infinity)
      .keyframes([
        { offset: 0, width: '80px' },
        { offset: 0.72, width: 'var(--width)' },
        { offset: 1, width: '240px' },
      ]);
  }

  play() {
    this.animation.play();
  }

  ngOnInit() {
  }

  atrasSesion(){
    this.router.navigateByUrl("/login");
  }

  accesoCamara(){
    
  }

}
