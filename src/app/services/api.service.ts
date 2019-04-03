import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient ) {}

  getTasks(){
    return this.http.put('http://serena.ai:49156/getTasks', {});
  }

  getTask(taskId){
    return this.http.put('http://serena.ai:49156/getTasksByID', {TaskID: taskId});
  }

  updateTask(reflection, rating, taskId, isShared){
    return this.http.put('http://serena.ai:49156/updateTask', {TaskID: taskId, reflection: reflection, rating: rating, isShared: isShared});
  }

  createTask(task, rating){
    return this.http.put('http://serena.ai:49156/CreateTask', {task: task, rating: rating});
  }
}
