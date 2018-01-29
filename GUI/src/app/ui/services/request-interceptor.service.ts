import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes('auth/login')) { return next.handle(req); }
    const auth = this.injector.get(AuthService);
    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'Basic ' + auth.getAuthorizationHeader())
    });
    return next.handle(authReq);
  }
}
