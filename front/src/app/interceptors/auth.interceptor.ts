import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "../core/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  getToken(): string {
    const token = localStorage.getItem("token");
    if (token === null) return "null";
    return token;
  }

  getHeaders(): any {
    const token = this.getToken();
    const headers = { Authorization: "Bearer " + token };
    return headers;
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (!(this.getToken() === "null")) {
      console.log("interceptor ok");
      const requestWithAuth = request.clone({
        headers: request.headers.set(
          "Authorization",
          "Bearer " + this.getToken()
        )
      });
      return next.handle(requestWithAuth);
    }
    return next.handle(request);
  }
}
