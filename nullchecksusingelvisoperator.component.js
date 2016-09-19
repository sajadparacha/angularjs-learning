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
    var NullChecksUsingELVISOperator;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NullChecksUsingELVISOperator = (function () {
                function NullChecksUsingELVISOperator() {
                    //**Example of a nested JSON object
                    this.post = {
                        title: "Angular js course",
                        assignee: null /*{
                            name: "Sajjad Ahmed Paracha",
                            department : "PEASD DWSD"
                        }*/,
                        address: "Khobar"
                    };
                }
                NullChecksUsingELVISOperator = __decorate([
                    core_1.Component({
                        selector: 'nullchecksusinglvsoperator',
                        template: "\n        <h1>Null Check using ELVIS operator</h1>\n        <h2>Title: {{post.title}}</h2>\n        <!-- ?. is the ELVIS operator which means display empty string if the object is null -->\n        <h2>Name: {{post.assignee?.name}}</h2>\n        <h2>Department: {{post.assignee?.department}}</h2>\n        <h2>Address: {{post.address}}</h2>\n        <h1>Null Check using ELVIS operator</h1>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], NullChecksUsingELVISOperator);
                return NullChecksUsingELVISOperator;
            }());
            exports_1("NullChecksUsingELVISOperator", NullChecksUsingELVISOperator);
        }
    }
});
//# sourceMappingURL=nullchecksusingelvisoperator.component.js.map