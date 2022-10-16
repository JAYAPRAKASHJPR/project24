import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resolver',
  templateUrl: './resolver.component.html',
  styleUrls: ['./resolver.component.css']
})
export class ResolverComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
   sno: number = 0;
   name:string = "";
  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data:any) => {
        this.sno = data.data.sno;
        this.name = data.data.name;
    })
  }

}
