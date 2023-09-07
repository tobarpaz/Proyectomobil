import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario:string = "";
  contrasena:string = "";

  constructor(private router:Router) { }

  ngOnInit() {
  }
 onLogin(){


    if (this.usuario == "") {
      alert("Debe ingresar un usuario");
      return;
    }
    if (this.contrasena == "") {
      alert("Debe ingresar una contraseña");
      return;
    }

    if (this.usuario == "pgy4121-001d" && this.contrasena == "pgy4121-001d") {
    
      this.router.navigateByUrl('inicio');
    }else{
      alert("Usuario o contraseña incorrecta.")
    }
  }

  restablecer(){
    
      this.router.navigateByUrl('restablecer') 
  }
  registro(){
    
    this.router.navigateByUrl('registro') 
}
}
