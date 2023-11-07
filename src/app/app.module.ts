import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestAwesomeDTComponent } from './components/test-awesome-dt/test-awesome-dt.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import {AwesomeNgDataTableModule} from 'awesome-ng-datatable';
import { environment } from '@env/environment';
import { CommonModule } from '@angular/common';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    TestAwesomeDTComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AwesomeNgDataTableModule,
    TranslateModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private translate: TranslateService) {
    let currentLanguage = localStorage.getItem('language');
    this.translate.addLangs(environment.supportedLanguages)
    this.translate.setDefaultLang(environment.defaultLanguage);

    const langToSet = currentLanguage ?? environment.defaultLanguage
    if (!currentLanguage) {
        localStorage.setItem('language', langToSet);
        currentLanguage = langToSet;
    }
    this.translate.use(langToSet);

}
 }
