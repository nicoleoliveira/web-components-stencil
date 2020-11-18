/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface WcsButton {
        "disabled": boolean;
        "label": string;
        "type": 'default' | 'primary' | 'secondary';
    }
}
declare global {
    interface HTMLWcsButtonElement extends Components.WcsButton, HTMLStencilElement {
    }
    var HTMLWcsButtonElement: {
        prototype: HTMLWcsButtonElement;
        new (): HTMLWcsButtonElement;
    };
    interface HTMLElementTagNameMap {
        "wcs-button": HTMLWcsButtonElement;
    }
}
declare namespace LocalJSX {
    interface WcsButton {
        "disabled"?: boolean;
        "label"?: string;
        "type"?: 'default' | 'primary' | 'secondary';
    }
    interface IntrinsicElements {
        "wcs-button": WcsButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "wcs-button": LocalJSX.WcsButton & JSXBase.HTMLAttributes<HTMLWcsButtonElement>;
        }
    }
}
