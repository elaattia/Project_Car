import { Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit  {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    
  }
}
