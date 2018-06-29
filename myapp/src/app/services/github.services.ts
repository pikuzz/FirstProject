import { Injectable } from '@angular/core';
import { Http,Response} from '@angular/http';
//import {Observable}from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';



@Injectable()
export class GithubService {
   
    private url='http://api.github.com/users/';

    constructor(private _http: Http) {
    }

    getUser(userName) {
            return this._http.get(this.url + userName).pipe(
            map((res:Response) => res.json()));
          }

    getFollowers(userName){
        return this._http.get(this.url + userName + "/followers").pipe(
        map(res => res.json()));
    }
        }