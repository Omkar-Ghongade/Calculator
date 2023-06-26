import { outputAst } from '@angular/compiler';
import { Component, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator-app';
  
  input:string=''
  result:string=''

  num(num: string) {
    if (num==".") {
      if (this.input !="" ) {
 
        const lastNum=this.getLastOperand()
        console.log(lastNum.lastIndexOf("."))
        if (lastNum.lastIndexOf(".") >= 0) return;
      }
    }
    if (num=="0") {
      if (this.input=="" ) {
        return;
      }
      const PrevKey = this.input[this.input.length - 1];
      if (PrevKey === '/' || PrevKey === '*' || PrevKey === '-' || PrevKey === '+')  {
          return;
      }
    }
    this.input = this.input + num
    this.ans();
  }
 
 
  getLastOperand() {
    let pos:number;
    console.log(this.input)
    pos=this.input.toString().lastIndexOf("+")
    if (this.input.toString().lastIndexOf("-") > pos) pos=this.input.lastIndexOf("-")
    if (this.input.toString().lastIndexOf("*") > pos) pos=this.input.lastIndexOf("*")
    if (this.input.toString().lastIndexOf("/") > pos) pos=this.input.lastIndexOf("/")
    console.log('Last '+this.input.substr(pos+1))
    return this.input.substr(pos+1)
  }
 
 
  operatorr(op: string) {
    const lastKey = this.input[this.input.length - 1];
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+')  {
      return;
    }
    this.input = this.input + op
    this.ans();
  }
 
  clrr() {
    if (this.input !="" ) {
      this.input=this.input.substr(0, this.input.length-1)
    }
  }

  clr() {
    this.result = '';
    this.input = '';
  }
 
  ans() {
    let formula = this.input;
    let lastKey = formula[formula.length - 1];
    if (lastKey === '.')  {
      formula=formula.substr(0,formula.length - 1);
    }
    lastKey = formula[formula.length - 1];
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' || lastKey === '.')  {
      formula=formula.substr(0,formula.length - 1);
    }
    this.result = eval(formula);
  }
 
  getAnswer() {
    this.ans();
    this.input = this.result;
    if (this.input=="0") this.input="";
  }
}
