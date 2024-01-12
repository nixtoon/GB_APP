import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/servicios/apiservice.service';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.page.html',
  styleUrls: ['./ejercicios.page.scss'],
})
export class EjerciciosPage implements OnInit {

  ejercicios: any[] = [];

  constructor(private api:ApiserviceService) { }

  ngOnInit() {
    this.api.getEjercicios().subscribe(
      (response) => {
        this.ejercicios = response.model
        console.log(response.model)
      },(error) =>{
        console.log(error)
      }
    )
  }

}
