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
/*     console.log("Usuario",this.usuario);
    console.log("Contraseña",this.contrasena); */


    if (this.usuario == "") {
      alert("Debe ingresar un usuario");
      return;
    }
    if (this.contrasena == "") {
      alert("Debe ingresar una contraseña");
      return;
    }

    if (this.usuario == "admin" && this.contrasena == "123") {
      //alert("Login correcto");
      this.router.navigateByUrl('inicio');
    }else{
      alert("Usuario o contraseña incorrecta.")
    }
  }

  restablecer(){
    
      this.router.navigateByUrl('restablecer') 
  }
}
