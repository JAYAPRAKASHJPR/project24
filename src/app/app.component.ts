import { Component } from '@angular/core';
import {Router} from "@angular/router"
import {DisplayContentComponent} from './display-content/display-content.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taxAmountEntered:number=0;
  constructor(private route:Router){
  }
  title = 'project24';
  processNavigation():void{
   this.route.navigateByUrl(`displayContent/${this.taxAmountEntered}/jp`)
  }
}
