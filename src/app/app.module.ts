import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpCacheInterceptor } from './http-cache.interceptor';
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { GithubCardComponent } from './components/github-card/github-card.component';
import { UserPanelComponent } from './components/user-panel/user-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SkeletonComponent,
    GithubCardComponent,
    UserPanelComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpCacheInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
