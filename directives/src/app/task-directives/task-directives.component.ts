import { Component } from '@angular/core';

type TData = {
  name: string;
  email: string;
  address: string;
};

@Component({
  selector: 'app-task-directives',
  templateUrl: './task-directives.component.html',
  styleUrl: './task-directives.component.css',
})
export class TaskDirectivesComponent {
  name: string;
  email: string;
  address: string;
  data: Array<TData> = [];

  addData() {
    this.data.push({
      name: this.name,
      email: this.email,
      address: this.address,
    });
    console.log(this.data);
  }
  removeUser(index: number) {
    this.data.splice(index, 1);
  }
}
