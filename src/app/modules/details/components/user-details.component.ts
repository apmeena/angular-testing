import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user-service.service';
import { User } from '../../../interfaces/User';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {

    public userId: String = null;
    public selectedUser: User;

    constructor(private _userService: UserService, private route: ActivatedRoute) {
        this.selectedUser = this.route.snapshot.data.userData;
    }

}
