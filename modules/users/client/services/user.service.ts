/**
 * Angular 2 core injectable object for creating services.
 */
import { Injectable, Inject } from '@angular/core';

/**
 * Get the user class model.
 */
import { User } from '../models/user.model.client';

/**
 * Pull in the necessary HTTP objects.
 */
import {
  Http,
  Response,
  HttpModule,
  RequestOptions,
  Request,
  RequestMethod,
  Headers
} from '@angular/http';

import { FileUploader } from 'ng2-file-upload';

import { Observable } from 'rxjs/Rx';

/*
 * Reactive library.
 */
import 'rxjs/add/operator/map';

import { USERS_CONFIG, USERS_DI_CONFIG, UsersConfig } from '../config/users-config';

/**
 * The main User service class.
 */
@Injectable()
export class UserService {
  user: User;
  uploader: FileUploader;

  constructor(
    private http: Http,
    @Inject(USERS_CONFIG) config : UsersConfig
  ) { 

    this.uploader = new FileUploader({ url: config.uploads.profilePicture.url });
  }

  read(userId: string) : Observable<User> {
    return this.http.get('api/users/' + userId)
      .map(this.extractData);
  }

  create(newUser: User) : Observable<User> {
    return this.http.post('api/users', newUser)
      .map(this.extractData);
  }

  update(updatedUser: User) : Observable<User> {
    return this.http.put('api/users', updatedUser)
      .map(this.extractData);
  }

  delete(userId: string) : Observable<User> {
    return this.http.delete('api/users/' + userId)
      .map(this.extractData);
  }

  register(newUser: User) : Observable<User> {
    return this.http.post('api/users/register', newUser)
      .map(this.extractData);
  }

  uploadProfilePicture(onCompleteItem : (item: any, response: any, headers: any) => void) {
    this.uploader.onCompleteItem = onCompleteItem;
    if (this.uploader.queue.length === 1) {
      this.uploader.queue[0].upload();
    }
  }

  private extractData(res: Response | any) {
    let body = res.json();
    return body;
  }
}