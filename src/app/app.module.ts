import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './components/server/server.Component';
import { ServersComponent } from './components/servers/servers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SuccessAlertComponent } from './components/successalert/successalert.component';
import { WarningAlertComponent } from './components/warningAlert/warningAlert.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    NavbarComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    DataBindingComponent,
    DirectivesComponent  
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
