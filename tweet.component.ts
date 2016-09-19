import {Component,Input,Output,EventEmitter} from "angular2/core";
import {LikeComponent} from './like.component';
import {TweetService} from './tweet.service'
@Component({
    selector : "tweet",
    template : `
    
        <div *ngFor="#tweet of tweets">
        <h4>Tweet Component ----> </h4>
        <div class="media">
        <div class="media-left">
            <a href="#">
            <img class="media-object" src="{{tweet.imageUrl}}" alt="">
            </a>
            
        </div>
        <div class="media-body">
            <h4 class="media-heading">{{tweet.handle }}</h4>
            
            <like></like>
        </div>
        </div>
        </div>    
    `,
    directives:[LikeComponent],
    providers :[TweetService]

})

export class TweetComponent{
    @Input() autherName="";
    @Input() tweeterAddress="";
    @Output() liked=new EventEmitter();
     i=0;
    tweets;
    constructor(tweetService:TweetService){
     this.tweets=tweetService.getTweets();

    }

}