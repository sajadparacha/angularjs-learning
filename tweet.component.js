System.register(["angular2/core", './like.component', './tweet.service'], function(exports_1, context_1) {
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
    var core_1, like_component_1, tweet_service_1;
    var TweetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (tweet_service_1_1) {
                tweet_service_1 = tweet_service_1_1;
            }],
        execute: function() {
            TweetComponent = (function () {
                function TweetComponent(tweetService) {
                    this.autherName = "";
                    this.tweeterAddress = "";
                    this.liked = new core_1.EventEmitter();
                    this.i = 0;
                    this.tweets = tweetService.getTweets();
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TweetComponent.prototype, "autherName", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TweetComponent.prototype, "tweeterAddress", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], TweetComponent.prototype, "liked", void 0);
                TweetComponent = __decorate([
                    core_1.Component({
                        selector: "tweet",
                        template: "\n    \n        <div *ngFor=\"#tweet of tweets\">\n        <h4>Tweet Component ----> </h4>\n        <div class=\"media\">\n        <div class=\"media-left\">\n            <a href=\"#\">\n            <img class=\"media-object\" src=\"{{tweet.imageUrl}}\" alt=\"\">\n            </a>\n            \n        </div>\n        <div class=\"media-body\">\n            <h4 class=\"media-heading\">{{tweet.handle }}</h4>\n            \n            <like></like>\n        </div>\n        </div>\n        </div>    \n    ",
                        directives: [like_component_1.LikeComponent],
                        providers: [tweet_service_1.TweetService]
                    }), 
                    __metadata('design:paramtypes', [tweet_service_1.TweetService])
                ], TweetComponent);
                return TweetComponent;
            }());
            exports_1("TweetComponent", TweetComponent);
        }
    }
});
//# sourceMappingURL=tweet.component.js.map