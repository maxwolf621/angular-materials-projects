import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListComponent } from './mat-list/mat-list.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
    GridListComponent,
    MatListComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
