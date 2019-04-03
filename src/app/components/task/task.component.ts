import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from "@angular/material";
import { ApiService } from "../../services/api.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  task;
  step = 1;
  anxietyScale;
  reflection;

  private _taskId = '';

  @Input()
  set taskId(taskId: string) {
    this._taskId = taskId || null;
    console.log(this._taskId);

    if (this._taskId) {
      this.apiService.getTask(this._taskId).subscribe((task:any) => {
        this.task = task.data[0];
        console.log(this.task);
      });
    }
  }

  //@Input() taskId;
  @Output() taskEmitter = new EventEmitter();
  @ViewChild('shareDialog') shareDialog: TemplateRef<any>;

  constructor(private dialog: MatDialog,
              private apiService: ApiService) {
  }

  ngOnInit() {
    console.log(this.taskId);
  }

  closeTask() {
    this.step = 1;
    this.taskEmitter.emit(null);
  }

  completeTask() {
    const dialogRef = this.dialog.open(this.shareDialog, {
      width: '250px',
      panelClass: 'modalbox'
    });

    dialogRef.afterClosed().subscribe(result => {
      let isShared = 0;
      if (result) {
        isShared = 1;
      }

      this.apiService.updateTask(this.reflection, this.anxietyScale, this._taskId, isShared).subscribe((res:any) => {
        console.log(res);
      });
      this.closeTask();
    });
  }
}
