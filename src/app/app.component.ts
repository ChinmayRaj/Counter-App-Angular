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
}
