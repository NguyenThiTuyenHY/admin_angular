import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {Routes,RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
const adminrouter : Routes =[
  {
    path: "admin",
    loadChildren:()=>import('./admin/main/main.module').then((m)=>m.MainModule)
  }
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(adminrouter),
    HttpClientModule
  ],
  exports:[
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
