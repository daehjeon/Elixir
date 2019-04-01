import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-hierarchy',
  templateUrl: './hierarchy.component.html',
  styleUrls: ['./hierarchy.component.scss']
})
export class HierarchyComponent implements OnInit {

  anxietyScale;

  @ViewChild('addTaskDialog') addTaskDialog: TemplateRef<any>;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  addTask(){
    const dialogRef = this.dialog.open(this.addTaskDialog, {
      width: '250px',
      panelClass: 'modalbox'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){

      }
    });
  }
}
