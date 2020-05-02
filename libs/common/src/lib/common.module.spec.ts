import { async, TestBed } from '@angular/core/testing';
import { MyCommonModule } from './common.module';

describe('MyCommonModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MyCommonModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MyCommonModule).toBeDefined();
  });
});
