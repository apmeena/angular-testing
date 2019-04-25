import {TestBed, async} from '@angular/core/testing';
import {CanActivateRouteGuard} from './can-activate-route.guard';

describe('Logged in guard should', () => {
    let canActivateRouteGuard: CanActivateRouteGuard;

    // async beforeEach
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [CanActivateRouteGuard]
        });
    }));

    // synchronous beforeEach
    beforeEach(() => {
        canActivateRouteGuard = TestBed.get(CanActivateRouteGuard);
    });

    it('be able to hit route when user is logged in', () => {
        let store: any = {
            isLoggedIn: true
        };
        spyOn(localStorage, 'getItem').and.callFake(function (key) {
            return store[key];
        });
        expect(canActivateRouteGuard.canActivate()).toBe(true);
    });

    it('not be able to hit route when user is not logged in', () => {
        let store: any = {
            isLoggedIn: false
        };
        spyOn(localStorage, 'getItem').and.callFake(function (key) {
            return store[key];
        });
        expect(canActivateRouteGuard.canActivate()).toBe(false);
    });
});
