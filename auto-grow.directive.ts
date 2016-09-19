import {Directive,ElementRef,Renderer} from 'angular2/core'

@Directive({
    selector : '[autoGrow]',
    /*
    [] is to refer to an attribute so if an HTML element has an attribute 
    autoGrow this directive will be applied to it
     */
    host : {
        '(focus)' : 'onFocus()',
        /**
         * () here means your binding onFocus event to the focus keyword 
         */
        '(blur)' : 'onBlur()'
    }

})
export class AutoGrowDirective{
    constructor (private el : ElementRef,private re: Renderer){

    }
    onFocus(){
         this.re.setElementStyle(this.el.nativeElement,'width','250');
    }
    onBlur(){
      this.re.setElementStyle(this.el.nativeElement,'width','120');
    }

}