import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidator } from './my.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  form: FormGroup
   ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required, MyValidator.restrictedEmails]),
      password: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
      address: new FormGroup({
        country: new FormControl('ua'),
        city: new FormControl('Запорожье', [Validators.required, Validators.minLength(3)])
      }),
      skills: new FormArray([])
    }) 
   }
 
   get skills () {
    return (this.form.get('skills') as FormArray).controls
  }

   submit() {
     const formControl = {...this.form.value}
     console.log(formControl)
     this.form.reset()
   }

   setCapital() {
    const mapCity = {
      ua: "Киев",
      pl: "Варшава",
      de: "Берлин"
    } as const;
    const countryCode = this.form.get('address')?.value.country;
    console.log( 'countryCode', countryCode );
    this.form.get('address')?.patchValue({city: mapCity[countryCode as keyof typeof mapCity]});
  }

  addSkill() {
    const control = new FormControl('', Validators.required);
    (<FormArray>this.form.get('skills')).push(control);
  }

  removeSkill(index: number) {
    (<FormArray>this.form.get('skills')).removeAt(index)
  }
}