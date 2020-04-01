import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Generic-detail-page';
  configu:any;
  a: any;
  datasource:any;
  data:any;
  titl:any;
  subtitle:any;
  constructor(http : HttpClient){
    http.get('https://private-b02bbd-assignement2.apiary-mock.com/questions')
    .subscribe(Response => {
      this.configu=Response;
      this.a = this.configu.config.title;
      this.datasource=this.configu.config.data_source.api;
      console.log(this.a);
      console.log(this.configu);
      console.log(this.datasource);
    });
    http.get('https://private-62ff0f-assignment213.apiary-mock.com/questions')
    .subscribe(Response => {
      
      this.data=Response;
      console.log(this.data);
      this.titl=this.data.response.data.title;
      console.log(this.titl)
      if(!this.data.response.data.subtitle || this.data.response.data.subtitle==''){

      }
      else{
        this.subtitle=this.data.response.data.subtitle
      }
    });
    
  }

}
