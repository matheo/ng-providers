import { Component, OnInit } from '@angular/core';
import { HttpService, TreeShakeableService } from '@matheo/common';

@Component({
  selector: 'app-submod1',
  templateUrl: './submod1.component.html',
  styleUrls: ['./submod1.component.scss']
})
export class Submod1Component implements OnInit {

  constructor(
    public http: HttpService,
    public shakeable: TreeShakeableService,
  ) { }

  ngOnInit(): void {
  }

}
