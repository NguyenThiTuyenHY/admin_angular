import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThongkeComponent } from './thongke/thongke.component';
import {Routes,RouterModule} from '@angular/router'
import { MainComponent } from './main.component';
import {PanelMenuModule} from 'primeng/panelmenu';
import {ButtonModule} from 'primeng/button';
const adminmainrouter: Routes = [
  {
    path:"",
    component: MainComponent,
    children:[
      {
        path:"",
        component: ThongkeComponent
      }
    ]
  }
]

@NgModule({
  declarations: [ThongkeComponent,MainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(adminmainrouter),
    PanelMenuModule,
    ButtonModule
  ],
  exports:[
    RouterModule,
  ]
})
export class MainModule { }
