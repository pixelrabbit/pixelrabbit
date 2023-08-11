import { Component, Host, Prop, h } from '@stencil/core';
// import { format } from '../../utils/utils';

@Component({
  tag: 'pxl-card',
  styleUrl: 'pxl-card.scss'
})
export class PxlCard {
  @Prop() headingText:string = null;
  /** HTML which populates card main */
  @Prop() content:string = null;
  @Prop() disclosure:string = null;


  render() {
    return (
      <Host>
      <div class="card">
        <header>
          {/* <pxl-heading level="h3" text="This is pxl-heading"></pxl-heading> */}
        </header>
        <div class="main">
          <div class="content" innerHTML={this.content} />
          <div><pxl-link href="#" text="Using pxl-link"></pxl-link></div>
        </div>
        <footer>
          <div class="disclosure">{this.disclosure}</div>
        </footer>
      </div>
      </Host>
    )
  }
}
