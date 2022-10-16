import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
@Component({
  selector: 'app-display-content',
  templateUrl: './display-content.component.html',
  styleUrls: ['./display-content.component.css']
})
export class DisplayContentComponent implements OnInit {
  displayRouteValue:string="";
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.displayRouteValue = this.route.snapshot.params['id']
    this.route.queryParams.subscribe(data => {
      console.log(data)
    })
  }

}
