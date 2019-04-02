import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ElixirListener {

  private modeChanger = new Subject();

  constructor() { }

  changeMode(mode){
    this.modeChanger.next(mode);
    return this.modeChanger;
  }
}
