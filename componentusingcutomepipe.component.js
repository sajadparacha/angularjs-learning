System.register(["angular2/core", './customepipe.pipe'], function(exports_1, context_1) {
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
    var core_1, customepipe_pipe_1;
    var ComponentUsingCutomePipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (customepipe_pipe_1_1) {
                customepipe_pipe_1 = customepipe_pipe_1_1;
            }],
        execute: function() {
            ComponentUsingCutomePipe = (function () {
                function ComponentUsingCutomePipe() {
                    this.postForCustomePipeExample = {
                        title: 'Angular Js Course',
                        body: "\n      Angular 2 is the next big thing. It's one of the leading frameworks for building modern, scalable, cross-platform apps. If you want to establish yourself as a front-end or a full-stack developer, you need to learn Angular 2.\n    "
                    };
                }
                ComponentUsingCutomePipe = __decorate([
                    core_1.Component({
                        selector: "componentusingcutomepipe",
                        template: "\n        <div>{{postForCustomePipeExample.title}}</div>\n        <div>{{postForCustomePipeExample.body | summary:200}}</div>\n        <!--postForCustomePipeExample.body | summary:200 means pipe should be applied to have a substring of 200 characters for more details see the implementation of pipe-->\n    ",
                        pipes: [customepipe_pipe_1.CustomePipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ComponentUsingCutomePipe);
                return ComponentUsingCutomePipe;
            }());
            exports_1("ComponentUsingCutomePipe", ComponentUsingCutomePipe);
        }
    }
});
//# sourceMappingURL=componentusingcutomepipe.component.js.map