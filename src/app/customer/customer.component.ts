import { Component } from '@angular/core';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  success: boolean = false;
  errors!: String[];

  constructor(private service: CustomerService){}
  
  customer: Customer = {
    idCustomer:'',
    firstNameCustomer: '',
    lastNameCustomer: '',
    cpfCustomer: '',
    birthdateCustomer: '',
    dataCreatedCustomer: '',
    statusCustomer: true,
    monthlyIncomeCustomer: '',
    emailCustomer: '',
    passwordCustomer: ''
}
/*
saveCustomer(){
  const datePipe = new DatePipe('en-US');
  this.customer.birthdateCustomer = datePipe.transform
  (this.customer.birthdateCustomer, 'dd/MM/yyyy');

  this.service.save(this.customer).subscribe({next: () => {
    this.success = true;
    this.errors = [];
  }, error: ex => {
    if (ex.error.errors) {
      ex.error.errors.forEach((element:any) =>  {
        this.success = false;
        this.errors = ex.error.errors;      
} else {
        this.success = false;
        this.errors = [];
    });
  }
});
}
}

*/

  saveCustomer() {
    const datePipe = new DatePipe('en-US');
    this.customer.birthdateCustomer = datePipe.transform
    (this.customer.birthdateCustomer, 'dd/MM/yyyy');

    this.service.save(this.customer).subscribe({
      next: () => {
        this.success = true;
        this.errors = [];
      },
      error: (ex) => {
        if (ex.error.errors) {
          this.success = false;
          this.errors = ex.error.errors;
        } else {
          this.success = false;
          this.errors = [];
        }
      },
    });
  }
}
