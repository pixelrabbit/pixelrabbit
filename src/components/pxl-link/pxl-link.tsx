import { Component, Prop, h } from '@stencil/core';
// import { printAttributes } from '../../utils/utils';

@Component({
  tag: 'pxl-link',
  styleUrl: 'pxl-link.scss'
})
export class PxlLink {
  @Prop() text: string = null;
  @Prop() href: string = "#";
  /** (optional) Icon which appears in link */
  @Prop() icon: string = null;
  /** (optional) Determines if link opens in new window */
  @Prop() external: boolean = false;

  render() {

    return <a href={this.href} target={this.external ? "_blank" : "_self"} class={"pxl-link"} >
      {this.text}
      {this.icon && this.icon != "none" &&
        <span>&nbsp;<svg><use href={"./feather-sprite.svg#" + this.icon} /></svg></span>
      }
    </a>;
  }
}
