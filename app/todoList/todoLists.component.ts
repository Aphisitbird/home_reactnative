import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'todoLists',
    moduleId: module.id,
    templateUrl: 'todoLists.component.html'
})

export class TodoListsComponent implements OnInit{
    twoWay: number ;
    oneWay: number ;
    todos = [];
    
    constructor() {

    }


    ngOnInit() {
        
    }
    add(){
        this.todos = [] ;
        
        this.todos.push((this.oneWay * (this.twoWay / 100)));
    }

    
}