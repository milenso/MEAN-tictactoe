import { TestBed, inject } from '@angular/core/testing';

import { SalasService } from './salas.service';

describe('SalasService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [SalasService]
        });
    });

    it('should ...', inject([SalasService], (service: SalasService) => {
        expect(service).toBeTruthy();
    }));
});
