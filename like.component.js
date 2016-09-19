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
    var LikeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LikeComponent = (function () {
                function LikeComponent() {
                    //**declaring a variable as input property which is visible to the any object of this component    
                    //**Declaring an input paramete with a different name to outer world
                    this.isLiked = false;
                    //**Publish an output event
                    this.change = new core_1.EventEmitter();
                    //**Declaring an input parameter as it is
                    //@Input('is_favorite') isLiked =false;
                    this.noOfLikes = 10;
                }
                LikeComponent.prototype.onClick = function () {
                    this.isLiked = !this.isLiked;
                    if (this.isLiked == true) {
                        this.noOfLikes = 11;
                    }
                    else {
                        this.noOfLikes = 10;
                    }
                    //**Call the change event when the favorite is cicked
                    this.change.emit({ newValue: this.isLiked });
                };
                LikeComponent.prototype.onmouseover = function ($event) {
                    $event.t;
                };
                __decorate([
                    core_1.Input('is_liked'), 
                    __metadata('design:type', Object)
                ], LikeComponent.prototype, "isLiked", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], LikeComponent.prototype, "change", void 0);
                LikeComponent = __decorate([
                    core_1.Component({
                        selector: "like",
                        /*
                        Don't delete below lines , these are to be used to define inline templates
                        Inline templates are good if small.
                        However if the HTML code grows it's better to create a new HTML file like favorite.template.html for better sepration of concerns
                    
                         */
                        // template:`
                        // <h2>Favorite Component 3453456</h2>
                        // <i class="glyphicon"
                        // [class.glyphicon-star-empty]="!isLiked"
                        // [class.glyphicon-star]="isLiked"
                        // (click)="onClick()"
                        // ></i>
                        // `
                        templateUrl: 'app/like.template.html',
                        styles: ["\n        .glyphicon-heart {\n            color : deeppink;\n            cursor : pointer;\n        }\n        .glyphicon-heart-empty {\n            color : GREEN;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], LikeComponent);
                return LikeComponent;
            }());
            exports_1("LikeComponent", LikeComponent);
        }
    }
});
//# sourceMappingURL=like.component.js.map