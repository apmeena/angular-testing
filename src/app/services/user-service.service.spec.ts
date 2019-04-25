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

  it('should get all users', inject(
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


  it('should get single user by id', inject(
    // HttpTestingController is a controller
    // to be injected into tests, that allows for mocking and flushing of requests.
    [HttpTestingController, UserService],
    (httpMock: HttpTestingController, UserService: UserService) => {
      const mockUser = { name: 'Bob', website: 'www.yessss.com' };

      UserService.getUserById('1').subscribe((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.Response:
            expect(event.body).toEqual(mockUser);
        }
      });

      // expectOne expect that a single request has been made
      // which matches the given URL, and return its mock.
      const mockReq = httpMock.expectOne(UserService.url + '1');

      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.responseType).toEqual('json');
      mockReq.flush(mockUser);

      // we call the verify method on our HttpTestingController instance 
      // to ensure that there are no outstanding requests to be made.
      httpMock.verify();
    }
  )
);

});
