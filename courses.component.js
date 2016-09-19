System.register(['angular2/core', './course.service', './auto-grow.directive'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, course_service_1, auto_grow_directive_1;
    var CoursesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (course_service_1_1) {
                course_service_1 = course_service_1_1;
            },
            function (auto_grow_directive_1_1) {
                auto_grow_directive_1 = auto_grow_directive_1_1;
            }],
        execute: function() {
            //import {FavoriteComponent} from './favorite.component'
            CoursesComponent = (function () {
                function CoursesComponent(courseService) {
                    this.title = "Title of the courses page";
                    this.twoWayBindedText = "Hello Two Way Binding";
                    this.twoWayBindedTextUsingNgModel = "Hello Two Way Binding Using ngModel";
                    this.isActive = true;
                    this.courses = courseService.getCourses();
                }
                CoursesComponent.prototype.onDivClick = function ($event) {
                    console.log("Handled by Div " + $event);
                };
                CoursesComponent.prototype.onClick = function ($event) {
                    //** getting the event information inside the event handler
                    console.log('Button Clicked ' + $event);
                    //**Means dont call the click event of the parent object    
                    $event.stopPropagation();
                };
                CoursesComponent = __decorate([
                    core_1.Component({
                        selector: 'courses',
                        template: "\n        <h2>Courses</h2>\n        <input type=\"text\" autoGrow/>\n        <button class=\"btn btn-primary \"\n        [style.backgroundColor]=\"isActive ? 'BLUE':'GRAY'\"\n        >Submit</button>\n        <!-- CSS Style binding \n        [] is used for property binding\n        () is used for event binding\n        change the value of isActive=true;\n        to test this example\n         -->\n <div (click)=\"onDivClick($event)\">\n <button (click)=\"onClick($event)\"\n        \n        >Submit With event binding</button>\n</div>\n<p>---------------------------------------------------------------------------------------------------------------------------------------------</p>\n\n<strong>Two Way Binding Example</strong>\n<input type=\"text\" [value]=\"twoWayBindedText\" \n(input)=\"twoWayBindedText=$event.target.value\"/>\n<!-- We are using inline code here however the \nbest practice is to use function here \nbecause we want to have our component easily testable -->\n\n<input type=\"button\" (click)=\"twoWayBindedText=''\" value=\"Clear\"/>\nPriview : {{twoWayBindedText}}\n\n<p>---------------------------------------------------------------------------------------------------------------------------------------------</p>\n<p>---------------------------------------------------------------------------------------------------------------------------------------------</p>\n\n<strong>Two Way Binding Example Using ngModel</strong>\n<input type=\"text\" [(ngModel)]=\"twoWayBindedTextUsingNgModel\" />\n\n<input type=\"button\" (click)=\"twoWayBindedTextUsingNgModel=''\" value=\"Clear\"/>\nPriview : {{twoWayBindedTextUsingNgModel}}\n\n<p>---------------------------------------------------------------------------------------------------------------------------------------------</p>\n        {{title}}\n        <ul>\n            <li *ngFor=\"#course of courses\">\n                {{course}}\n            <li>\n        </ul>\n        ",
                        providers: [course_service_1.CourseService],
                        directives: [auto_grow_directive_1.AutoGrowDirective]
                    }), 
                    __metadata('design:paramtypes', [course_service_1.CourseService])
                ], CoursesComponent);
                return CoursesComponent;
            }());
            exports_1("CoursesComponent", CoursesComponent);
        }
    }
});
//# sourceMappingURL=courses.component.js.map