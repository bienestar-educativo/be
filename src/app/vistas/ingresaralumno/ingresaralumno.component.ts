import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../servicios/api/api.service';

@Component({
  selector: 'app-ingresaralumno',
  standalone: true,
  imports: [],
  templateUrl: './ingresaralumno.component.html',
  styleUrl: './ingresaralumno.component.css'
})
export class IngresaralumnoComponent {
  data: any[]=[];

  constructor(private apiService: ApiService){}
  ngOnInit(): void{
    this.llenarData();
  }
  llenarData(){
    this.apiService.getData().subscribe( data =>{
      this.data = data;
      console.log(data);
    })
  }
}
