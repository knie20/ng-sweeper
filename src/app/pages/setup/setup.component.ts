import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css'],
   animations: []
})
export class SetupComponent {
  title = 'ng-sweeper';

  boardConfig: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.boardConfig = fb.group({
      x: new FormControl({value: 10, disabled: false}),
      y: new FormControl({value: 10, disabled: false}),
      bombs: new FormControl({value: 20, disabled: false}),
    })
  }

  onButtonClicked = (): void => {
    let x: number = this.boardConfig.get('x')?.value;
    let y: number = this.boardConfig.get('y')?.value;
    let bombs: number = this.boardConfig.get('bombs')?.value;

    this.router.navigate([`game/${x}/${y}/${bombs}`]);
  }
}
