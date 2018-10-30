import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatProgressBarModule
} from '@angular/material';
import { QuickSearchComponent } from './quick-search.component';
import { PostsService } from '../shared/services/posts.service';

export class PostsServiceStub {
    getPosts(): void {}
}

describe('QuickSearchComponent', () => {
  let component: QuickSearchComponent;
  let fixture: ComponentFixture<QuickSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickSearchComponent ],
      imports: [
        ReactiveFormsModule,
        BrowserAnimationsModule,

        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatProgressBarModule
      ],
      providers: [
          { provide: PostsService, useClass: PostsServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeDefined();
  });

  it('should have the initial value of quick search input as empty', () => {
      expect(component.qs.value).toEqual('');
  });

  it('should set a new value value to quick search input', () => {
        component.qs.setValue('Test');
        expect(component.qs.value).toEqual('Test');
    });

    it('should have table and pagination components when loading is false', () => {
        const el: HTMLElement = fixture.nativeElement;
        component.loading = false;
        fixture.detectChanges();
        expect(el.querySelector('table')).toBeTruthy();
        expect(el.querySelector('mat-paginator')).toBeTruthy();
    });
});
