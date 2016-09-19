System.register(["angular2/core"], function(exports_1, context_1) {
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
    var NgForWithIndex;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NgForWithIndex = (function () {
                function NgForWithIndex() {
                    this.cources = ['Course 1', 'Course 2', 'Course 3', 'Course 4'];
                }
                NgForWithIndex = __decorate([
                    core_1.Component({
                        selector: "ngforwithindex",
                        template: "\n\n        <ui *ngFor=\"#course of cources,#i=index\">\n            <li>({{i+1}}) --- {{course}}</li>\n        </ui>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], NgForWithIndex);
                return NgForWithIndex;
            }());
            exports_1("NgForWithIndex", NgForWithIndex);
        }
    }
});
//# sourceMappingURL=ngforwithindex.component.js.map