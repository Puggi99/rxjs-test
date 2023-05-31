import { Component } from '@angular/core';
import { DataService } from '../../services/data-service/data-service.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent {
  constructor(public dataService: DataService){}

}
