import { Component } from '@angular/core';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {  

  constructor(private service: CustomerService){
  }

  ngOnInit():void{
    this.saveCustomer();
  }
  
  customer: Customer = {
    idCustomer:'',
    firstNameCustomer: 'Carlos',
    lastNameCustomer: 'Lanches',
    cpfCustomer: '43050866039',
    birthdateCustomer: '05/03/1900',
    dataCreatedCustomer: '',
    monthlyIncomeCustomer: '80000',
    statusCustomer: true,
    emailCustomer: 'carloslanches@gmail.com',
    passwordCustomer: '123456'
}

saveCustomer() {
  this.service.save(this.customer).subscribe(response => {
    console.log(response)
  })
  }
}
