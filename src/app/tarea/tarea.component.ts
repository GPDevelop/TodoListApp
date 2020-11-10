import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApitareaService } from '../services/apitarea.service';
import { TareaDialogComponent } from './dialog/tarea-dialog/tarea-dialog.component';
import { TareaInterface } from '../models/tareaInterface';
import { DialogDeleteComponent } from '../common/delete/deletedialog.component';
import { templateJitUrl } from '@angular/compiler';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss']
})
export class TareaComponent implements OnInit {

  public lst: any[];

  public columnas: string[] = ['id', 'nombre', 'descripcion', 'usuario', 'estado', 'actions'];
 
  constructor( 
    private apiTarea: ApitareaService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getTareas();
  }
  
  getTareas(){
    this.apiTarea.getTareas().subscribe(resp => {
          this.lst = resp.data;
    });
  }

  openAdd(){
    const dialogRef = this.dialog.open(TareaDialogComponent, {
      width: '300'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getTareas();
    })
  }

  openEdit(tarea: TareaInterface){
    const dialogRef = this.dialog.open(TareaDialogComponent, {
      width: '300',
      data: tarea
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getTareas();
    })
  }

  delete(tarea: TareaInterface){
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: '300'
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result)
      {
        this.apiTarea.delete(tarea.id).subscribe(response => {
          if(response.result === 1)
          {
            this.snackBar.open('Tarea eliminada con exito','',{duration:2000});
            this.getTareas();
          }
        });
      }
      
    })
  }

}
