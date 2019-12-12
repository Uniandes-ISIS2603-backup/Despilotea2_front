<<<<<<< HEAD
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {ActivatedRoute, convertToParamMap} from '@angular/router';

import {AppModule} from '../../app.module';
import {EditorialDetailComponent} from './editorial-detail.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {EditorialService} from '../editorial.service';
import {Editorial} from '../editorial';

describe('EditorialDetailComponent', () => {
    let component: EditorialDetailComponent;
    let fixture: ComponentFixture<EditorialDetailComponent>;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [
                {
                    provide: APP_BASE_HREF,
                    useValue: ''
                }, 
                EditorialService,
                {
                    provide: ActivatedRoute,
                    useValue: {
                        snapshot: {
                           paramMap: convertToParamMap({id: 100})
                        }
                    }
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EditorialDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
=======
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorialDetailComponent } from './editorial-detail.component';

describe('EditorialDetailComponent', () => {
  let component: EditorialDetailComponent;
  let fixture: ComponentFixture<EditorialDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorialDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorialDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
>>>>>>> 9fb5411e535675b275d70ced890237bf0452f6e2
});
