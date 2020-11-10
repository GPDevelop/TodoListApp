import { Component, OnInit } from '@angular/core';
import { ApiusuarioService } from '../services/apiusuario.service';
import { Response } from '../models/response';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UsuarioDialogComponent } from './dialog/usuario-dialog/usuario-dialog.component';
import { usuarioInterface } from '../models/usuarioInterface';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  public lst: any[];

  public columnas: string[] = ['id', 'username', 'nombre' , 'actions'];
 
  constructor(
    private apiUsuario: ApiusuarioService,
    public dialog: MatDialog
  ) {

  }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(){
    this.apiUsuario.getUsuarios().subscribe(resp => {
          this.lst = resp.data;
    });
  }
  openAdd(){
    const dialogRef = this.dialog.open(UsuarioDialogComponent, {
      width: '300'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getUsuarios();
    })
  }

  openEdit(usuario: usuarioInterface){
    const dialogRef = this.dialog.open(UsuarioDialogComponent, {
      width: '300',
      data: usuario
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getUsuarios();
    })
  }
}
