import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef, Inject } from '@angular/core';
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
  list: string[] = [];

  constructor(
    private cdr: ChangeDetectorRef,
    public http: HttpService,
    public shakeable: TreeShakeableService,
    @Inject(HTTP_INTERCEPTORS) public interceptors: any[],
  ) { }

  ngOnInit(): void {
    this.http.name().subscribe(data => {
      this.name = data['name'];
      this.cdr.markForCheck();
    });

    this.list = this.interceptors.map(i => i.constructor.name);
  }
}
