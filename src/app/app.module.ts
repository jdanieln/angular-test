import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbMenuModule, NbCardModule, NbInputModule, NbIconModule, NbFormFieldModule, NbTabsetModule, NbListModule, NbOptionModule, NbSelectModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbSecurityModule } from '@nebular/security';
import { HttpClientModule } from '@angular/common/http';
import { NbPasswordAuthStrategy, NbAuthModule } from '@nebular/auth';
import { NgxSpinnerModule } from "ngx-spinner";

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './pages/dashboard/components/header/header.component';
import { FooterComponent } from './pages/dashboard/components/footer/footer.component';
import { MenuComponent } from './pages/dashboard/components/menu/menu.component';
import { CharactersComponent } from './pages/dashboard/characters/characters.component';
import { CharacterCardComponent } from './pages/dashboard/characters/components/character-card/character-card.component';
import { CharacterDetailComponent } from './pages/dashboard/character-detail/character-detail.component';
import { ComicsComponent } from './pages/dashboard/comics/comics.component';
import { ComicsDetailComponent } from './pages/dashboard/comics-detail/comics-detail.component';
import { ComicCardComponent } from './pages/dashboard/comics/components/comic-card/comic-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    CharactersComponent,
    CharacterCardComponent,
    CharacterDetailComponent,
    ComicsComponent,
    ComicsDetailComponent,
    ComicCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSecurityModule.forRoot(),
    HttpClientModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbCardModule,
    NbInputModule,
    NbIconModule,
    NbFormFieldModule,
    NgxSpinnerModule,
    NbTabsetModule,
    NbListModule,
    NbOptionModule,
    NbSelectModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
        }),
      ],
      forms: {},
    }), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
