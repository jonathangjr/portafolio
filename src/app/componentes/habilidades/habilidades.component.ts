import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent {

  // constructor() { }

  // ngOnInit() {
  // }

  // PolarArea
  // public polarAreaChartLabels:string[] = ['Html', 'Css', 'Javascript', 'Angular', 'Ionic', 'Firebase', 'Nodejs', 'Mongodb'];
  // public polarAreaChartData:number[] = [50, 40, 30, 40, 40, 20, 30, 20];
  // public polarAreaLegend:boolean = true;
 
  // public polarAreaChartType:string = 'polarArea';
 
  // // events
  // public chartClicked(e:any):void {
  //   console.log(e);
  // }
 
  // public chartHovered(e:any):void {
  //   console.log(e);
  // }

  // Pie
  public pieChartLabels:string[] = ['Html', 'Css', 'Javascript', 'Angular', 'Ionic', 'Firebase', 'Nodejs', 'Mongodb'];
  public pieChartData:number[] = [10, 6, 4, 4, 5, 3, 3, 2];
  public pieChartType:string = 'pie';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
