var $ = require('jquery');
import Person from './modules/Person';

class Adult extends Person {
  payTaxes() {
    console.log(this.name + " now owes $0 in taxes.")
  }
}

alert("ABC 123");

let john = new Person("John Doe", "blue");
  john.greet();

let jane = new Adult("Jane Doe", "orange");
  jane.greet();
  jane.payTaxes();
