import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    templateUrl: 'deletedialog.component.html'
})

export class DialogDeleteComponent{
    constructor(public dialogref: MatDialogRef<DialogDeleteComponent>)
    {

    }
}