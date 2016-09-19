System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var UsingPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            UsingPipe = (function () {
                function UsingPipe() {
                    this.course = {
                        title: ' Angular js',
                        noOfStudent: 12345,
                        price: 20.789,
                        date: '9-4-2016'
                    };
                }
                UsingPipe = __decorate([
                    core_1.Component({
                        selector: 'usingpipe',
                        template: "\n        \n            {{course.title | uppercase}}<br/>\n            {{course.noOfStudent | number:'2.2-2'}}<br/>\n            <!--2.2-2 means min 2 initial digits and after decimal point max 2 and minimum 2 digits-->\n            \n            {{course.price | currency:'AUD':true:'2.2-2'}}<br/>\n            <!-- 'PKR' is the currency , true means we want to see currency symbol , 2.2-2 is decimal formating   -->\n           <!-- {{course.date | date:'mm yyyy'}}<br/> -->\n            {{course | json}}<br/>\n            \n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], UsingPipe);
                return UsingPipe;
            }());
            exports_1("UsingPipe", UsingPipe);
        }
    }
});
//# sourceMappingURL=usingpipe.component.js.map