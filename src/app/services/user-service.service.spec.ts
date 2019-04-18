import { TestBed, inject } from '@angular/core/testing';
import { HttpEvent, HttpEventType } from '@angular/common/http';

import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { UserService } from './user-service.service';


describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
  });

  it(
    'should get users',
    inject(
      [HttpTestingController, UserService],
      (httpMock: HttpTestingController, UserService: UserService) => {
        const mockUsers = [
          { name: 'Bob', website: 'www.yessss.com' },
          { name: 'Juliette', website: 'nope.com' }
        ];

        UserService.getUsers().subscribe((event: HttpEvent<any>) => {
          switch (event.type) {
            case HttpEventType.Response:
              expect(event.body).toEqual(mockUsers);
          }
        });

        const mockReq = httpMock.expectOne(UserService.url);

        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');
        mockReq.flush(mockUsers);

        httpMock.verify();
      }
    )
  );
});