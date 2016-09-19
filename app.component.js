System.register(['angular2/core', './courses.component', './authors.component', './favorite.component', './like.component', './voter.component', './tweet.component', './if-condition.component', './switchcondition.component', './ngforwithindex.component', './usingpipe.component', './componentusingcutomepipe.component', './favoriteusingngclass.component', './nullchecksusingelvisoperator.component', './usingngcontent.component', './zipppy.component', './contact-form.component'], function(exports_1, context_1) {
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
    var core_1, courses_component_1, authors_component_1, favorite_component_1, like_component_1, voter_component_1, tweet_component_1, if_condition_component_1, switchcondition_component_1, ngforwithindex_component_1, usingpipe_component_1, componentusingcutomepipe_component_1, favoriteusingngclass_component_1, nullchecksusingelvisoperator_component_1, usingngcontent_component_1, zipppy_component_1, contact_form_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (voter_component_1_1) {
                voter_component_1 = voter_component_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            },
            function (if_condition_component_1_1) {
                if_condition_component_1 = if_condition_component_1_1;
            },
            function (switchcondition_component_1_1) {
                switchcondition_component_1 = switchcondition_component_1_1;
            },
            function (ngforwithindex_component_1_1) {
                ngforwithindex_component_1 = ngforwithindex_component_1_1;
            },
            function (usingpipe_component_1_1) {
                usingpipe_component_1 = usingpipe_component_1_1;
            },
            function (componentusingcutomepipe_component_1_1) {
                componentusingcutomepipe_component_1 = componentusingcutomepipe_component_1_1;
            },
            function (favoriteusingngclass_component_1_1) {
                favoriteusingngclass_component_1 = favoriteusingngclass_component_1_1;
            },
            function (nullchecksusingelvisoperator_component_1_1) {
                nullchecksusingelvisoperator_component_1 = nullchecksusingelvisoperator_component_1_1;
            },
            function (usingngcontent_component_1_1) {
                usingngcontent_component_1 = usingngcontent_component_1_1;
            },
            function (zipppy_component_1_1) {
                zipppy_component_1 = zipppy_component_1_1;
            },
            function (contact_form_component_1_1) {
                contact_form_component_1 = contact_form_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.post = {
                        title: 'Input Property',
                        isFavorite: false,
                        totalVoteCount: 10,
                        myvote: 0
                    };
                }
                AppComponent.prototype.favoriteChanged = function ($event) {
                    console.log($event);
                };
                AppComponent.prototype.onVote = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<h1>Hello Angular</h1>\n<h1>Contact form</h1>\n<contact-form></contact-form>\n<h1>Contact form</h1>\n\n  <zippy title=\"Title of the accordian component\">\n    body of the 1st accordian componenet\n  </zippy>  \n  <zippy title=\"Title of the accordian component\">\n    body of the 2nd accordian componenet\n  </zippy>  \n <!-- the content inside this tag will be placed where the ng-contant tag is used look at the related component class -->\n <usingngcontent>\n <div class=\"body\">\n This is Body!\n </div>\n <div class=\"heading\">\n This is Heading\n </div>\n </usingngcontent> \n \n <nullchecksusinglvsoperator></nullchecksusinglvsoperator>   \n<favoriteusingngclass></favoriteusingngclass>    \n<h2>Component Using cutome pipe </h2>\n<componentusingcutomepipe></componentusingcutomepipe>\n<h2>Component Using cutome pipe</h2>\n\n<h2>Using pipe in a component </h2>\n<usingpipe></usingpipe>\n<h2>Using pipe in a component</h2>\n\n<h2>NGFor loop testing with index </h2>\n<ngforwithindex></ngforwithindex>\n<h2>NGFor loop testing with index</h2>\n\n<h2>Switch Condition Component testing</h2>\n<switch></switch>\n<h2>Switch Condition Component testing</h2>\n<condition></condition>                \n                <tweet></tweet>\n\n                <courses></courses>\n                <authors></authors>\n<i class=\"glyphicon glyphicon-star\" ></i>\n               <!--Property binding for an input property-->\n                <!--Event binding of an output event -->\n                <favorite [is_favorite]=\"post.isFavorite\" (change)=\"favoriteChanged($event)\"></favorite> \n                <like></like>\n                <vote \n                [myvote]=\"post.myvote\"\n                [totalVoteCount]=\"post.totalVoteCount\"\n                (vote)=\"onVote($event)\"\n                ></vote>\n                \n                \n                ",
                        directives: [contact_form_component_1.ContactFormComponent, zipppy_component_1.ZippyComponent, usingngcontent_component_1.UsingNgContent, nullchecksusingelvisoperator_component_1.NullChecksUsingELVISOperator, favoriteusingngclass_component_1.FavoriteUsingNgClass, componentusingcutomepipe_component_1.ComponentUsingCutomePipe, usingpipe_component_1.UsingPipe, ngforwithindex_component_1.NgForWithIndex, switchcondition_component_1.SwitchConditionComponent, if_condition_component_1.IfConditionRuleConponent, tweet_component_1.TweetComponent, courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent, favorite_component_1.FavoriteComponent, like_component_1.LikeComponent, voter_component_1.VoterComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map