import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { TreeShakeableService } from '../../services/tree-shakeable.service';

@Component({
  selector: 'common-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayComponent implements OnInit {
  name = 'Loading...'

  constructor(
    private cdr: ChangeDetectorRef,
    public http: HttpService,
    public shakeable: TreeShakeableService,
  ) { }

  ngOnInit(): void {
    this.http.name().subscribe(data => {
      this.name = data['name'];
      this.cdr.markForCheck();
    })
  }
}
