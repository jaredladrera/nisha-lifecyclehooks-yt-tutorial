import { Component, OnInit, OnChanges, SimpleChanges,
  Input, DoCheck, AfterContentInit, ContentChild, ElementRef,
  AfterContentChecked, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';
import { IProduct, MProduct } from './../product';

@Component({
  selector: 'app-hook-child',
  templateUrl: './hook-child.component.html',
  styleUrls: ['./hook-child.component.css']
})
export class HookChildComponent implements OnInit,
 OnChanges, DoCheck, AfterContentInit,
 AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input() parentData!: string;
  @Input() product?: IProduct;

  @Input() color?: string | "gray";

  // This is for afterContentInit
  @ContentChild("selector1") contentChild?: ElementRef;

  @ViewChild('childHook') viewChild?: ElementRef;

  constructor() {
    console.log("constructor called")
   }

  ngOnInit(): void {
    console.log("Oninit called");
  }

  // This life cycle hooks only detect changes in the plain text but not in object or array
  // you can use model class or just use ngDocheck to detect of the child the changes
  ngOnChanges(changes: SimpleChanges): void {
    console.log("onchanges called", changes);
  }

  ngDoCheck(): void {
    console.log("ngDocheck", this.product?.name);
  }

  // this is only run once like oninit
  // this is can only handle first time execution
  ngAfterContentInit(): void {
    console.log("ContentAfterInit");
    this.contentChild?.nativeElement.setAttribute("style", `color:${this.color}`);
  }

  // this LCH can detect any changes on the content running wheen theirs changes detect on the content
  ngAfterContentChecked(): void {
    console.log("afterContentCheck");
    this.contentChild?.nativeElement.setAttribute("style", `color:${this.color}`);
  }

  // like other LFC this LFC is oly run onces
  ngAfterViewInit(): void {
    console.log("AfterViewInit", this.viewChild);
    // this.viewChild?.nativeElement.setAttribute('style', 'background-color: gray');
  }

  // this is run if the viewChild
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
    this.viewChild?.nativeElement.setAttribute('style', `background-color: ${this.color}`);
  }

}
