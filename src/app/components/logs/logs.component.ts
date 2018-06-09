import { Component, OnInit } from '@angular/core';
import {log} from '../../models/log';
import {LogService} from '../../services/log.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
logs:log[]
  constructor(private logService:LogService) { }

  ngOnInit() {
    this.logs = this.logService.getLogs();
  }

}
