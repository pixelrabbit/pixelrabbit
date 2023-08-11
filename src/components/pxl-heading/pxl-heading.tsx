import { Component, Host, Prop, h } from '@stencil/core';


@Component({
    tag: 'pxl-heading',
    styleUrl: 'pxl-heading.scss'
})
export class PxlHeading {

    /** label over heading, sometimes used for taxonomy label */
    @Prop() label: string = null;
    /** heading level  */
    @Prop() level: ("h1" | "h2" | "h3" | "h4") = "h2";
    /** heading text */
    @Prop() text: string = "Heading text";
    /** makes heading container for link */
    @Prop() href: string = null;
     

    render() {
        return (
            <Host>
                {this.label && <div class="label">{this.label}</div>}
                <this.level>
                    {this.href
                        ? <pxl-link text={this.text}></pxl-link>
                        : this.text
                    }    
                </this.level>
            </Host>
        );
    }
}
