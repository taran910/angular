import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-bottom-array',
  templateUrl: './bottom-array.component.html',
  styleUrls: ['./bottom-array.component.css']
})
export class BottomArrayComponent implements OnInit {
  configu:any;
  data:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://private-b02bbd-assignement2.apiary-mock.com/questions')
    .subscribe(Response => {
      this.configu=Response;
      console.log(this.configu);
      this.http.get(this.configu.config.data_source.api)
    .subscribe(Response => {
      if(Response)
      {
          hideloader();
      }
      this.data=Response;
      console.log(this.data);
      bottom_array(this.configu.config.array_sections,this.data);
    });
  });
  
  
  function hideloader(){
    document.getElementById('loading').style.display = 'none';
  }
  function bottom_array(data,data2){
    let tabs = document.querySelector('.nav-tabs');
  let tab_content = document.querySelector('.tab-content');
  let ab=data2.response.data;

  data.forEach(function(val, index) {
    let tab = document.createElement('li');
    let tab_data = document.createElement('div');
    tab_data.classList.add('tab-pane', 'active');
    if(index === 0) {
      tab_data.classList.add('show', 'active');
    }
    tab_data.id = `${val.data_array}`;
    tab_data.setAttribute('role', 'tabpanel');
    tab_data.setAttribute('aria-labelledby', `${val.data_array}-tab`);
    let rows = document.createElement('div');
    rows.className = 'rows';
    ab[val.data_array].forEach(x => {
      let row = document.createElement('div');
      row.className = 'flex';
      val.rows.forEach(r => {
      let r1 = document.createElement('div');
      r1.classList.add('col-sm-6', 'barr1');
      r1.innerHTML = `<div>
      <BR>
      <div style='border-style: groove; border-radius: 4px;'>
      <strong>${r.lhs} :</strong>${x[r.rhs]}
      </div>
      </div>`;
      row.appendChild(r1);
      });
      rows.appendChild(row);
    });
    tab_data.appendChild(rows);
    tab_content.appendChild(tab_data);
    tab.className = 'nav-item';
    tab.innerHTML = `<a class="nav-link" id="${val.data_array}-tab" data-toggle="tab" href="#${val.data_array}" role="tab" aria-controls="${val.data_array}" aria-selected="true">${val.title}</a>`;
    tabs.appendChild(tab);
  });

    }
  }
}
