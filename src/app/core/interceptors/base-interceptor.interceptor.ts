import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { ErrorResponse } from '../models/IError.model';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class BaseInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: ErrorResponse) => {
        if (error.statusCode === 404) {
          this.toastr.error(error.message);
        } else {
          console.error('Server-side error', error);
        }
        return throwError(error);
      })
    );
  }
}
