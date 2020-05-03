import { Component, OnInit } from '@angular/core';
import { HttpService, TreeShakeableService } from '@matheo/common';

@Component({
  selector: 'app-mod2',
  templateUrl: './mod2.component.html',
  styleUrls: ['./mod2.component.scss']
})
export class Mod2Component implements OnInit {

  constructor(
    public http: HttpService,
    public shakeable: TreeShakeableService,
  ) { }

  ngOnInit(): void {
  }

}
