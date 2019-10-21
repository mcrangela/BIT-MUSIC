import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyMusicComponent } from './body-music.component';

describe('BodyMusicComponent', () => {
  let component: BodyMusicComponent;
  let fixture: ComponentFixture<BodyMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
