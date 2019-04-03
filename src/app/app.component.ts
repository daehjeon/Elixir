import { Component, Input } from '@angular/core';
import { ElixirListener } from "./services/elixir.listener";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'elixir-app';
  taskScreenOpened = false;
  taskId = null;
  mode = 'home';

  constructor(private elixirListener: ElixirListener) { }

  ngOnInit() {
    this.elixirListener.changeMode(this.mode).subscribe((mode)=>{
      this.mode = <string>mode;
    });
  }

  changeMode(mode){
    this.elixirListener.changeMode(mode);
  }

  openTask(taskId){
    this.taskId = taskId;

    if (!taskId){
      this.taskScreenOpened = false;
    }else{
      this.taskScreenOpened = true;
    }
  }
}
