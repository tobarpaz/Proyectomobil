import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {

  constructor(private router:Router){
  }


  ngOnInit() {
  }

  restablecerContrasenia(){
    console.log("Correo enviado")
  }

}
