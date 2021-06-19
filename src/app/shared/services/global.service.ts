import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  dataObjectSubject: BehaviorSubject<any> = new BehaviorSubject(false);
  tokenSubject: BehaviorSubject<any> = new BehaviorSubject(false);
  constructor() { }
}
