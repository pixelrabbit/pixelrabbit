/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface PxlButton {
    }
    interface PxlCard {
        /**
          * HTML which populates card main
         */
        "content": string;
        "disclosure": string;
        "headingText": string;
    }
    interface PxlHeader {
        /**
          * label over header, sometimes used for taxonomy label
         */
        "sitetitle": string;
    }
    interface PxlHeading {
        /**
          * makes heading container for link
         */
        "href": string;
        /**
          * label over heading, sometimes used for taxonomy label
         */
        "label": string;
        /**
          * heading level
         */
        "level": ("h1" | "h2" | "h3" | "h4");
        /**
          * heading text
         */
        "text": string;
    }
    interface PxlLink {
        /**
          * (optional) Determines if link opens in new window
         */
        "external": boolean;
        "href": string;
        /**
          * (optional) Icon which appears in link
         */
        "icon": string;
        "text": string;
    }
}
declare global {
    interface HTMLPxlButtonElement extends Components.PxlButton, HTMLStencilElement {
    }
    var HTMLPxlButtonElement: {
        prototype: HTMLPxlButtonElement;
        new (): HTMLPxlButtonElement;
    };
    interface HTMLPxlCardElement extends Components.PxlCard, HTMLStencilElement {
    }
    var HTMLPxlCardElement: {
        prototype: HTMLPxlCardElement;
        new (): HTMLPxlCardElement;
    };
    interface HTMLPxlHeaderElement extends Components.PxlHeader, HTMLStencilElement {
    }
    var HTMLPxlHeaderElement: {
        prototype: HTMLPxlHeaderElement;
        new (): HTMLPxlHeaderElement;
    };
    interface HTMLPxlHeadingElement extends Components.PxlHeading, HTMLStencilElement {
    }
    var HTMLPxlHeadingElement: {
        prototype: HTMLPxlHeadingElement;
        new (): HTMLPxlHeadingElement;
    };
    interface HTMLPxlLinkElement extends Components.PxlLink, HTMLStencilElement {
    }
    var HTMLPxlLinkElement: {
        prototype: HTMLPxlLinkElement;
        new (): HTMLPxlLinkElement;
    };
    interface HTMLElementTagNameMap {
        "pxl-button": HTMLPxlButtonElement;
        "pxl-card": HTMLPxlCardElement;
        "pxl-header": HTMLPxlHeaderElement;
        "pxl-heading": HTMLPxlHeadingElement;
        "pxl-link": HTMLPxlLinkElement;
    }
}
declare namespace LocalJSX {
    interface PxlButton {
    }
    interface PxlCard {
        /**
          * HTML which populates card main
         */
        "content"?: string;
        "disclosure"?: string;
        "headingText"?: string;
    }
    interface PxlHeader {
        /**
          * label over header, sometimes used for taxonomy label
         */
        "sitetitle"?: string;
    }
    interface PxlHeading {
        /**
          * makes heading container for link
         */
        "href"?: string;
        /**
          * label over heading, sometimes used for taxonomy label
         */
        "label"?: string;
        /**
          * heading level
         */
        "level"?: ("h1" | "h2" | "h3" | "h4");
        /**
          * heading text
         */
        "text"?: string;
    }
    interface PxlLink {
        /**
          * (optional) Determines if link opens in new window
         */
        "external"?: boolean;
        "href"?: string;
        /**
          * (optional) Icon which appears in link
         */
        "icon"?: string;
        "text"?: string;
    }
    interface IntrinsicElements {
        "pxl-button": PxlButton;
        "pxl-card": PxlCard;
        "pxl-header": PxlHeader;
        "pxl-heading": PxlHeading;
        "pxl-link": PxlLink;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "pxl-button": LocalJSX.PxlButton & JSXBase.HTMLAttributes<HTMLPxlButtonElement>;
            "pxl-card": LocalJSX.PxlCard & JSXBase.HTMLAttributes<HTMLPxlCardElement>;
            "pxl-header": LocalJSX.PxlHeader & JSXBase.HTMLAttributes<HTMLPxlHeaderElement>;
            "pxl-heading": LocalJSX.PxlHeading & JSXBase.HTMLAttributes<HTMLPxlHeadingElement>;
            "pxl-link": LocalJSX.PxlLink & JSXBase.HTMLAttributes<HTMLPxlLinkElement>;
        }
    }
}
