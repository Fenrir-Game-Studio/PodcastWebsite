import { Injectable } from '@angular/core';
   import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

   @Injectable({
     providedIn: 'root'
   })
   export class SnackbarToastsService {

     constructor(private snackBar: MatSnackBar) { }

     show(message: string, action: string) {
      const config = new MatSnackBarConfig();
      config.duration = 0;
      config.panelClass = ['custom-toast']
       this.snackBar.open(message, action, config);
     }
   }