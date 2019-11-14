import { Injectable } from '@angular/core';
import {HttpCRUDService} from "../../service/http-crud.service";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TaskService extends HttpCRUDService{

  constructor(http: HttpClient) {
    super(http,'tasks');
  }

}
