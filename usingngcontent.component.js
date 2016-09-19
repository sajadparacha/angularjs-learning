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
    var UsingNgContent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            UsingNgContent = (function () {
                function UsingNgContent() {
                }
                UsingNgContent = __decorate([
                    core_1.Component({
                        selector: 'usingngcontent',
                        template: "\n    <h2>Using ng content to place any content in div from another component</h2>\n    <div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n  <ng-content select=\".heading\"></ng-content>\n  </div>\n  <div class=\"panel-body\">\n   <!--This means that any component with class \"body\" will be placed here -->\n    <ng-content select=\".body\"></ng-content>\n  </div>\n</div>\n<h2>Using ng content to place any content in div from another component</h2>\n\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], UsingNgContent);
                return UsingNgContent;
            }());
            exports_1("UsingNgContent", UsingNgContent);
        }
    }
});
//# sourceMappingURL=usingngcontent.component.js.map