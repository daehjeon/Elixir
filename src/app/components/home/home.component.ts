import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output() taskEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  openTask(task){
    this.taskEmitter.emit(task);
  }
}
