import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user-service.service';
import { User } from '../../../../interfaces/User';
import { Router } from '@angular/router';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

    public searchedTerm: string = '';
    public users: User[] = [];
    private allUsers: User[] = [];

    constructor(private _userService: UserService, private router: Router) {
        //
    }

    public ngOnInit() {
        this._userService.getUsers().subscribe((users: User[]) =>{
            this.users = this.allUsers = users;
        });
    }

    public filterUserList() {
        const searchTxt = this.searchedTerm;
        if (searchTxt) {
            this.users = this.allUsers.filter((user) => user.name.toLowerCase().includes(searchTxt.toLowerCase()));
        } else {
            this.users = this.allUsers;
        }
    }

    public logout() {
        localStorage.removeItem('isLoggedIn');
        this.router.navigate(['login']);
    }

}
