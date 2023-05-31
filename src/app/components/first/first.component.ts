import { Component } from '@angular/core';
import { DataService } from '../../services/data-service/data-service.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {

    constructor(public dataService: DataService){}


}
