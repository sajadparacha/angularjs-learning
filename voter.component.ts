import {Component,Input,Output,EventEmitter} from 'angular2/core'
@Component({
    selector : "vote",
    template : `
            <h2>Voter component</h2>
            <div>
            <i class="glyphicon glyphicon-menu-up vote-button" 
            (click)="upVote()"></i>
            
            <span>Total Vote Count = {{totalVoteCount+myvote}}</span>
            <i class="glyphicon glyphicon-menu-down vote-button" (click)="downVote()"></i>
            </div>
    `
})
export class VoterComponent{
   @Input() myvote =0;
   @Input() totalVoteCount=0;
   @Output() vote=new EventEmitter();
    upVote(){
        console.log("upVote Clicked");
        if(this.myvote==1){
            return;
        }
        this.myvote++;
        this.vote.emit({myvote:this.myvote})
    }
    downVote(){
        console.log("Down vote clicked");
        if(this.myvote==-1){
            return;
        }
        
        this.myvote--;
        this.vote.emit({myvote:this.myvote});
    }
}