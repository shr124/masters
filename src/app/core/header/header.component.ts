import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SaveDataService } from '../../shared/save-data.service';
import 'rxjs/rx';
import { Response } from '@angular/http';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private saveDataService: SaveDataService, public authService: AuthService) {
    
   }

  ngOnInit() {
  }

  onSave(){
    this.saveDataService.SaveData()
    .subscribe(
      (response: Response) =>{
        console.log(response.json());
      },
      (error) =>{
        console.log(error);
      }
    )
  }

  onFetch(){
    this.saveDataService.getData();
  }
  

  logOut(){
    this.authService.logOut();
  }


}
