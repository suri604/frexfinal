import { Component, OnInit, AfterViewChecked } from '@angular/core';

import {FormControl, Validators, NgModel} from '@angular/forms';
import { DonationService } from 'src/app/services/donation-service.service';

import { promise } from 'protractor';
import { resolve } from 'url';
import {Title} from '@angular/platform-browser';

declare let paypal: any;
@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})


export class DonationComponent implements OnInit, AfterViewChecked {

  
  constructor(private service: DonationService,
    private titleService: Title ) { }
   
  ngOnInit() {
    this.titleService.setTitle('Donate Now');
    
  }
  onSubmit() { 
    console.log(this.model);
    this.service.donation(this.model).subscribe();
   
    this.submitted = true; 
    // this.checkout = true;
  }
  
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
  
  countries = ['India', 'Australia', 'China',
              'England', 'America'];
  // denotations = [25000, 50000, 75000, 100000];
  
    model = new DonForm(1, '', '','', 100, this.countries[0]);
  
    submitted = false;
    // checkout = false;

  addscript: boolean = false;
  paypalLoad: boolean = true;
  paypalConfig = {
    env:'sandbox',
    client: {
      sandbox: 'Aedp8XqxYfe1dmA0PYMComatYwCi-S-c77ePgszVG0IJfZycBxBwiSzIz3tS1S4fLJpXMHUJ-aOzgoDl',
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            {amount: {total: this.model.amount, currency: 'INR'}}
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment)=>{
      // redirection after successful payemt

      })
    }

  };

  ngAfterViewChecked(): void{
  if(!this.addscript){
    this.addPaypalScript().then(()=>{
    paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
    this.paypalLoad = false;

    })
  }
  }
  addPaypalScript(){
    this.addscript = true;
    return new Promise((resolve,reject) => {
    let scripttagElement = document.createElement('script');
    scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
    scripttagElement.onload = resolve;
    document.body.appendChild(scripttagElement);
    })
  }


}
export class DonForm {
    

  constructor(
    public id: number,
    public name: string,
    public emailid: string,
    public phonenumber: string,
    public amount: number,
    public country: string
  ) {  }


}
