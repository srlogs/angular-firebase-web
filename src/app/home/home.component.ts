import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name : string;
  email : string;
  username : string;
  emailid : string;
  message : boolean = false;
  userData = new FormGroup( {
    name : new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])
  });
  constructor(private firebaseService : FirebaseService) { }

  ngOnInit(): void {
  }
  addUserData()
  {
    if(!this.userData.invalid)
    {
      const newUser = {
        name : this.username,
        email : this.emailid
      }
      //console.log(newUser);
      this.firebaseService.addUser(newUser)
        .subscribe(data => {
          console.log(newUser);
        })
  }
    
    this.message = true;
  }


}

