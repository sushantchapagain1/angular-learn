import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
})
export class PipesComponent {
  title = 'Pipes in angular';
  count = 324234;
  decimalValue = 98.12332;
  productPrice = 12.782133;

  today: Date = new Date();

  testObj: object = {
    id: 1,
    title: 'Hello object title',
  };
  postArr: Array<any> = ['post1', 'post2', 'post3', 'post4', 'post5'];
}
