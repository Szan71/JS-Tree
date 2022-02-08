import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    $('#frmt').jstree({
      'core': {
          'data': [{
              "text": "Root node 1",
              "state": {
                  "opened": false
              },
              "children": [{
                  "text": "Child node 1.1",
                  "state": {
                      "selected": false
                  },
                  "children": [{
                      "text": "Child node 1.1.1",
                      "state": {
                          "selected": false
                      },
                      "icon": "jstree-file"
                  }]
              }, {
                  "text": "Child node 1.2",
                  "state": {
                      "disabled": true
                  },
                  "icon": "jstree-file"
              }, {
                  "text": "Child node 1.3",
                  "state": {
                      "disabled": true
                  },
                  "icon": "jstree-file"
              }]
          }, {
              "text": "Root node 2",
              "state": {
                  "opened": false
              },
              "children": [{
                  "text": "Child node 2.1",
                  "state": {
                      "selected": false
                  },
                  "icon": "jstree-file"
              }, {
                  "text": "Child node 2.2",
                  "state": {
                      "disabled": false
                  },
                  "icon": "jstree-file"
              }, {
                  "text": "Child node 2.2",
                  "state": {
                      "disabled": false
                  },
                  "icon": "jstree-file"
              }]
          }]
      }
  });  
  
  }
}
  
