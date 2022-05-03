import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { ContactService } from './../../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})


  export class ContactComponent implements OnInit {
    FormData!: FormGroup;
    constructor(private builder: FormBuilder, private contact: ContactService) { }
  
    ngOnInit() {
      this.FormData = this.builder.group({
        First_name: new FormControl('', [Validators.required]),
        Email: new FormControl('', [Validators.required, Validators.email]),
        Comment: new FormControl('', [Validators.required]),
        Last_name: new FormControl('', [Validators.required]),
        Phone:new FormControl('', [Validators.required,Validators.pattern("")])
      });
    }

    keyPressNumbers(event: any) {
      var charCode = (event.which) ? event.which : event.keyCode;
      // Only Numbers 0-9
      if ((charCode < 48 || charCode > 57)) {
        event.preventDefault();
        return false;
      } else {
        return true;
      }
    }
  
  
    onSubmit(FormData: any) {
      console.log(FormData)
      this.contact.PostMessage(FormData)
        .subscribe(response => {
          location.href = ''
         // console.log(response)
        }, error => {
          console.warn(error.responseText)
         // console.log({ error })
        })
    }
  }