import { Injectable } from '@angular/core';
import {log} from '../models/log';
@Injectable({
  providedIn: 'root'
})
export class LogService {
log:log[];

  constructor() { 
    this.log=[
      {id:'1',text:'Generated Components',date:new Date('06/09/2018 8:40:23 AM')},
      {id:'2',text:'Added Login',date:new Date('06/07/2018 8:40:23 AM')}
    ]
  }

  getLogs(){
    return this.log;
  }
}
