import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaComponent } from './sala.component';

describe('SalaComponent', () => {
    let component: SalaComponent;
    let fixture: ComponentFixture<SalaComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SalaComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SalaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
