import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { TreeShakeableService } from '../../services/tree-shakeable.service';

@Component({
  selector: 'common-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  name = 'Loading...'

  constructor(
    public http: HttpService,
    public shakeable: TreeShakeableService,
  ) { }

  ngOnInit(): void {
    this.http.name().subscribe(data => {
      this.name = data['name'];
    })
  }
}
