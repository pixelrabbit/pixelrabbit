import { Component, Host, Prop, h } from '@stencil/core';


@Component({
    tag: 'pxl-header',
    styleUrl: 'pxl-header.scss'
})
export class PxlHeader {

    /** label over header, sometimes used for taxonomy label */
    @Prop() sitetitle: string = "Site Title";

    render() {
        return (
            <Host>
                <div class="container">
                    <p class="title">{this.sitetitle}</p>
                    <pxl-navbar></pxl-navbar>
                </div>
            </Host>
        );
    }
}
