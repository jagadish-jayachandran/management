import { RecipeService } from './../../../_services/recipe.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { first } from 'rxjs';
import { AlertService } from 'src/app/_services/alert.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-add-edit-receipe',
  templateUrl: './add-edit-receipe.component.html',
  styleUrls: ['./add-edit-receipe.component.scss']
})
export class AddEditReceipeComponent implements OnInit {
  form!: FormGroup;
    id!: string;
    isAddMode: boolean = false;
    loading = false;
    submitted = false;
    dataSource: any[]=[];
  constructor(  private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private recipeService:RecipeService,
    private alertService: AlertService
    ) { }

  ngOnInit(): void { this.id = this.route.snapshot.params['id'];
  this.isAddMode = !this.id;
  

  this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
  });

  if (!this.isAddMode) {
      this.recipeService.getById(this.id).subscribe(x => 
        {
console.log(x);
            // this.setValue('name',x.name);
            this.form.patchValue(x[0]);
        }
        );
    //   this.userService.getById(this.id)
    //       .pipe(first())
    //       .subscribe(x => this.form.patchValue(x));
  }
}

// convenience getter for easy access to form fields
get f() { return this.form.controls; }

onSubmit() {
  this.submitted = true;

  // reset alerts on submit
  this.alertService.clear();

  // stop here if form is invalid
  if (this.form.invalid) {
      return;
  }

  this.loading = true;
  if (this.isAddMode) {
      this.createUser();
  } else {
      this.updateUser();
  }
}

private createUser() {
   let data = this.form.value;
   this.dataSource.push(data);
  this.recipeService.create(this.form.value)
        // .subscribe({
        //     next: () => {
                this.alertService.success('Recipe added', { keepAfterRouteChange: true });
                this.router.navigate(['recipe'], { relativeTo: this.route });
        //     },
        //     error: error => {
        //         this.alertService.error(error);
                this.loading = false;
        //     }
        // });

//   this.userService.create(this.form.value)
//       .pipe(first())
//       .subscribe({
//           next: () => {
//               this.alertService.success('User added', { keepAfterRouteChange: true });
//               this.router.navigate(['recipe'], { relativeTo: this.route });
//           },
//           error: error => {
//               this.alertService.error(error);
//               this.loading = false;
//           }
//       });
}

private updateUser() {
  this.recipeService.update(this.id, this.form.value);
//       .pipe(first())
//       .subscribe({
//           next: () => {
              this.alertService.success('User updated', { keepAfterRouteChange: true });
              this.router.navigate(['recipe'], { relativeTo: this.route });
//           },
//           error: error => {
//               this.alertService.error(error);
              this.loading = false;
//           }
//       });
}
}
