import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule} from '@angular/material/sidenav';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatTableModule} from '@angular/material/table';
import { TareaComponent } from './tarea/tarea.component';
import { MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule} from '@angular/material/card';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule} from '@angular/forms';
import { TareaDialogComponent } from './tarea/dialog/tarea-dialog/tarea-dialog.component';
import { UsuarioDialogComponent } from './usuario/dialog/usuario-dialog/usuario-dialog.component';
import { DialogDeleteComponent } from './common/delete/deletedialog.component';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './Security/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsuarioComponent,
    TareaComponent,
    TareaDialogComponent,
    UsuarioDialogComponent,
    DialogDeleteComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSnackBarModule,
    FormsModule,
    MatCardModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
