import {FormControl} from "@angular/forms";

export class MyValidator {
  static restrictedEmails(control: FormControl): {[key: string]: boolean } {
   if ((control.value)?.includes('.ru') ){

     return  {restrictedRusEmail: true};
   }
   return null;
  }

}