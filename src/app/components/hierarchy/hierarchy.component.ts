import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ApiService } from "../../services/api.service";

@Component({
  selector: 'app-hierarchy',
  templateUrl: './hierarchy.component.html',
  styleUrls: ['./hierarchy.component.scss']
})
export class HierarchyComponent implements OnInit {

  tasks;
  task;
  anxietyScale;

  @ViewChild('addTaskDialog') addTaskDialog: TemplateRef<any>;

  constructor(private dialog: MatDialog,
              private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getTasks().subscribe((tasks:any) => {
      this.tasks = tasks.data;
      console.log(this.tasks);
    });
  }

  addTask(){
    const dialogRef = this.dialog.open(this.addTaskDialog, {
      width: '250px',
      panelClass: 'modalbox'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.apiService.createTask(this.task, this.anxietyScale).subscribe((res:any) => {
          this.tasks.push({TaskName: this.task, HierarchyRating: this.anxietyScale})
          console.log(res);
        });
      }
    });
  }
}
