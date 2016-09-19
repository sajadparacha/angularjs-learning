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
    var IfConditionRuleConponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            IfConditionRuleConponent = (function () {
                function IfConditionRuleConponent() {
                    this.cources = [];
                }
                IfConditionRuleConponent = __decorate([
                    core_1.Component({
                        selector: 'condition',
                        template: "\n    <!-- ngIf statement will remove an element from the dom if the expression it has evaluate to false -->\n    <!--\n        <h3> List of cources with if condition</h3>\n        <div *ngIf=\"cources.legth >0\">\n            Many cources to display here\n        </div>\n\n        <div *ngIf=\"cources.length==0\">\n            NO COURCES TO DISPLAY HERE\n        </div>\n        -->\n <!--hidden property binding will include the element in dom but make it as hidden -->        \n<!--Using hidden property -->\n      <h3> List of cources with if condition</h3>\n        <div [hidden]=\"cources.length== 0\">\n            Many cources to display here dsdsadas\n        </div>\n\n        <div [hidden]=\"cources.length > 0\">\n            NO COURCES TO DISPLAY HERE 32432\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], IfConditionRuleConponent);
                return IfConditionRuleConponent;
            }());
            exports_1("IfConditionRuleConponent", IfConditionRuleConponent);
        }
    }
});
//# sourceMappingURL=if-condition.component.js.map