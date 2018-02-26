"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TodoListsComponent = /** @class */ (function () {
    function TodoListsComponent() {
        this.todos = [];
    }
    TodoListsComponent.prototype.ngOnInit = function () {
    };
    TodoListsComponent.prototype.add = function () {
        this.todos = [];
        this.todos.push((this.oneWay * (this.twoWay / 100)));
    };
    TodoListsComponent = __decorate([
        core_1.Component({
            selector: 'todoLists',
            moduleId: module.id,
            templateUrl: 'todoLists.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], TodoListsComponent);
    return TodoListsComponent;
}());
exports.TodoListsComponent = TodoListsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb0xpc3RzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRvZG9MaXN0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFRbEQ7SUFLSTtRQUZBLFVBQUssR0FBRyxFQUFFLENBQUM7SUFJWCxDQUFDO0lBR0QscUNBQVEsR0FBUjtJQUVBLENBQUM7SUFDRCxnQ0FBRyxHQUFIO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUU7UUFFakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQWpCUSxrQkFBa0I7UUFOOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMEJBQTBCO1NBQzFDLENBQUM7O09BRVcsa0JBQWtCLENBb0I5QjtJQUFELHlCQUFDO0NBQUEsQUFwQkQsSUFvQkM7QUFwQlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd0b2RvTGlzdHMnLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiAndG9kb0xpc3RzLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRvZG9MaXN0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIHR3b1dheTogbnVtYmVyIDtcclxuICAgIG9uZVdheTogbnVtYmVyIDtcclxuICAgIHRvZG9zID0gW107XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBhZGQoKXtcclxuICAgICAgICB0aGlzLnRvZG9zID0gW10gO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudG9kb3MucHVzaCgodGhpcy5vbmVXYXkgKiAodGhpcy50d29XYXkgLyAxMDApKSk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn0iXX0=