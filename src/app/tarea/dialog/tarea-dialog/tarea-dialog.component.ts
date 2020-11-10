import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { usuarioInterface } from '../../../models/usuarioInterface';
import { Response } from '../../../models/response';
import { TareaInterface } from '../../../models/tareaInterface';
import { ApitareaService } from '../../../services/apitarea.service';
import { ApiestadoService } from '../../../services/apiestado.service';
import { MatSelectModule } from '@angular/material/select';
import { estadoInterface } from '../../../models/estadoInterface';
import { ApiusuarioService } from '../../../services/apiusuario.service';

@Component({
  selector: 'app-tarea-dialog',
  templateUrl: './tarea-dialog.component.html',
  styleUrls: ['./tarea-dialog.component.scss']
})
export class TareaDialogComponent implements OnInit {

  public Estados: estadoInterface[];
  public Usuarios: usuarioInterface[];

  public Id: number;
  public Nombre: string;
  public Descripcion: string;
  public EstadoSelect: number;
  public UsuarioSelect: number;

  constructor(
    public dialogRef: MatDialogRef<TareaDialogComponent>,
    public apiTarea: ApitareaService,
    public apiEstado: ApiestadoService,
    public apiUsuario: ApiusuarioService,
    public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public tarea: TareaInterface
  ) {
      this.getEstados();
      this.getUsuarios();

      if(this.tarea != null)
      {
        this.Id = tarea.id;
        this.Nombre = tarea.nombre;
        this.Descripcion = tarea.descripcion;
        this.EstadoSelect = tarea.idEstado;
        this.UsuarioSelect = tarea.idUsuario;
      }
  }

  ngOnInit(): void {

  }

  close(){
    this.dialogRef.close();
  }

  addTarea(){
    const tarea: TareaInterface = {id: 0, idUsuario: this.UsuarioSelect, nombre: this.Nombre, idEstado: this.EstadoSelect, descripcion: this.Descripcion};
    this.apiTarea.add(tarea).subscribe(
      response => {
        if(response.result === 1){
          this.dialogRef.close();
          this.snackBar.open('Tarea ingresada con exito.', '',{
            duration: 2000
          });
        }
    });
  }

  editTarea()
  {
    const tarea: TareaInterface = {id: this.Id, nombre: this.Nombre, idEstado: this.EstadoSelect, idUsuario: this.UsuarioSelect, descripcion: this.Descripcion}
    this.apiTarea.edit(tarea).subscribe(
      response => {
        if(response.result === 1){
          this.dialogRef.close();
          this.snackBar.open('Tarea modificada con exito.', '',{
            duration: 2000
          });
        }
    });
  }

  getEstados()
  {
    this.apiEstado.getEstados().subscribe(resp => {
          this.Estados = resp.data;
    });
  }

  getUsuarios()
  {
    this.apiUsuario.getUsuarios().subscribe(resp =>{
        this.Usuarios = resp.data;
    })
  }

}
