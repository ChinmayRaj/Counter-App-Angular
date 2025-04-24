import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title="First"
  count:number=0;
name:string="";
displayName:string="";
email:string="";

getName(event:Event){
  const name=(event.target as HTMLInputElement).value;
  this.name=name;
}
  
showName(newname:string){
  this.displayName=newname;
}
setName(){
  this.name="Sam";
}
getEmail(email:string){{
this.email=email;
}}
setEmail(){
  this.email="chin@gmail.com";
}
  handleCounter(value:string){
    if(value=='minus'){
      if(this.count!=0)
      this.count=this.count-1;
    else{
      alert("Cannot decrement if value is already zero !!!");
    }
    }else if(value=='plus'){
      this.count=this.count+1;
    }
    else{
      this.count=0;
    }
  }
  
  handleListeners(event:Event){
  console.log("Event happened is ",event.type);
  }
}
