import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'todo';

  bold: boolean = false;


  todoEintrag: string = "";
  todoDate: Date = new Date();

  output: string = "";

  todos: {
    todoEintrag: string,
    todoDate: Date
  } [] = [];

  add() {
    this.todos.push({todoEintrag: this.todoEintrag, todoDate: this.todoDate});
  }

  randomEuro: number = 0;

  randomEuroGen(): number {
    return Math.random() * 127 + 10;
  }


}
