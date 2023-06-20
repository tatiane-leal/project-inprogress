import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Comment } from '../models/comment.interface';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private _http: HttpClient) {}

  getCommentByBirthdayPersonId(
    birthdayPersonId: number
  ): Observable<Comment[]> {
    let url = 'http://localhost:3000/comments';

    let params = {
      birthdayPersonId: birthdayPersonId,
    };

    return this._http.get<Comment[]>(url, { params }).pipe(
      map((data) => {
        return data;
      })
    );
  }

  createComment(
    message: string,
    birthdayPersonId: number
  ): Observable<Comment> {
    let url = 'http://localhost:3000/comments';

    let params = {
      id: 1,
      message: message,
      username: 'Your team mate',
      birthdayPersonId: birthdayPersonId,
      createdAt: '2022-06-16',
      photo: '',
    };

    return this._http.get<Comment>(url, { params }).pipe(
      map((data) => {
        return data;
      })
    );
  }
}
