import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiusuarioService } from '../../../services/apiusuario.service';
import { usuarioInterface } from '../../../models/usuarioInterface';
import { Response } from '../../../models/response';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-usuario-dialog',
  templateUrl: './usuario-dialog.component.html',
  styleUrls: ['./usuario-dialog.component.scss']
})
export class UsuarioDialogComponent implements OnInit {

  public id: number;
  public nombre: string;
  public username: string;
  public password: string;

  constructor(
    public dialogRef: MatDialogRef<UsuarioDialogComponent>,
    public apiUsuario: ApiusuarioService,
    public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public usuario: usuarioInterface
    ) {
        if( this.usuario != null)
        {
          this.id = usuario.id;
          this.nombre = usuario.nombre;
          this.username = usuario.userName;
          this.password = usuario.password;
        }
    }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }

  addUsuario(){
    const usuario: usuarioInterface = {id: 0, userName: this.username, nombre: this.nombre, password: this.password, token: ''};
    this.apiUsuario.add(usuario).subscribe(
      response => {
        if(response.result === 1){
          this.dialogRef.close();
          this.snackBar.open('Usuario inscrito con exito.', '',{
            duration: 2000
          });
        }
    });
  }

  editUsuario(){
    const usuario: usuarioInterface = {id: this.id, userName: this.username, nombre: this.nombre, password: this.password, token: ''};
    this.apiUsuario.edit(usuario).subscribe(
      response => {
        if(response.result === 1){
          this.dialogRef.close();
          this.snackBar.open('Usuario modificado con exito.', '',{
            duration: 2000
          });
        }
    });
  }
}
