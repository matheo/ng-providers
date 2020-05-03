import { Component, OnInit } from '@angular/core';
import { HttpService, TreeShakeableService } from '@matheo/common';

@Component({
  selector: 'app-mod1',
  templateUrl: './mod1.component.html',
  styleUrls: ['./mod1.component.scss']
})
export class Mod1Component implements OnInit {

  constructor(
    public http: HttpService,
    public shakeable: TreeShakeableService,
  ) { }

  ngOnInit(): void {
  }

}
