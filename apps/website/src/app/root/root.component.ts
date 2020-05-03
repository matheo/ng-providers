import { Component, OnInit } from '@angular/core';
import { HttpService, TreeShakeableService } from '@matheo/common';

@Component({
  selector: 'app-base',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  constructor(
    public http: HttpService,
    public shakeable: TreeShakeableService,
  ) { }

  ngOnInit(): void {
  }

}
