import { LightningElement } from 'lwc';
export default class HelloWorld extends LightningElement {
  greeting = 'Mundo!';
  changeHandler(event) {
    this.greeting = event.target.value;
  }
}