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
  
  ionViewDidEnter() {
    this.animation = this.animationCtrl
    .create()
      .addElement(document.querySelectorAll("ion-card"))
      .duration(1500)
      .iterations(Infinity)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0.2');
      
    
  }

  play() {
    this.animation.play();
  }

  ngOnInit() {
  }

  atrasSesion(){
    this.router.navigateByUrl("/login");
  }
  
  escaneo(){
    this.router.navigateByUrl("/escaneo")
  }
  registroasig(){
    this.router.navigateByUrl("/registro-asig")
  }

}
