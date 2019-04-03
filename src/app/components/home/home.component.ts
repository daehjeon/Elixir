import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from "../../services/api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tasks;
  @Output() taskEmitter = new EventEmitter();

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getTasks().subscribe((tasks:any) => {
      this.tasks = tasks.data;
      console.log(this.tasks);
    });
  }

  openTask(task){
    this.taskEmitter.emit(task);
  }
}
