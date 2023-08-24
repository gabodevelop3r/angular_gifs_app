import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit{
  @Input()
  public url!: string;
  @Input()
  public alt: string = '';

  public hasLoader: boolean = false;

  ngOnInit(): void {
    if( !this.url )
      throw new Error('LazyImageComponent: url is required');
  }

  onLoad(): void {
    console.log('image loaded');
    setTimeout(() => {
      this.hasLoader = true;

    }, 1000);
  }

}
