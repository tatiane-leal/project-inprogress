import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Comment } from '../models/comment.interface';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  commentSubject$ = new BehaviorSubject<string>('');

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

    const currentDate = new Date();
    const formattedDate = format(currentDate, 'yyyy-MM-dd', { locale: enUS });

    const names = ['Luke Lopes', 'Matthew Smith', 'Janet Smith', 'Mary Lopes'];
    const randomIndex = Math.floor(Math.random() * names.length);
    const randomName = names[randomIndex];

    return this._http
      .post<Comment>(url, {
        message: message,
        username: randomName,
        birthdayPersonId: birthdayPersonId,
        createdAt: formattedDate,
        photo: '',
      })
      .pipe(
        map((data) => {
          return data;
        })
      );
  }
}
