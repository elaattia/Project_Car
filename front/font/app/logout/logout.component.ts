import { Component ,OnInit} from '@angular/core';
import{PublicService} from '../services/public.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  ngOnInit(): void {
    
  }

  constructor(private pService : PublicService){}
  logout(){
    this.pService.logout();
  }
}
