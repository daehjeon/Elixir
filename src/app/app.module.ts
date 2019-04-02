import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "./material.module";
import { HomeComponent } from './components/home/home.component';
import { HierarchyComponent } from './components/hierarchy/hierarchy.component';
import { TaskComponent } from "./components/task/task.component";
import { GestureConfig } from '@angular/material';
import 'hammerjs';
import { ApiService } from './services/api.service';
import { ElixirListener } from './services/elixir.listener';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HierarchyComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig },
    ElixirListener,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
