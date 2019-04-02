import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from "@angular/material";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  step = 4;
  anxietyScale;
  @Input() taskId;
  @Output() taskEmitter = new EventEmitter();
  @ViewChild('shareDialog') shareDialog: TemplateRef<any>;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  closeTask(){
    this.taskEmitter.emit(null);
  }

  completeTask(){
    console.log(this.taskId);
    const dialogRef = this.dialog.open(this.shareDialog, {
      width: '250px',
      panelClass: 'modalbox'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){

      }
      this.closeTask();
    });
  }
}
