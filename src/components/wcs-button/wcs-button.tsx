import { Component, h, Prop, Element, Host } from '@stencil/core';

@Component({
  tag: 'wcs-button',
  styleUrl: 'wcs-button.css',
  shadow: true,
})
export class WcsButton {

  @Element() private el: HTMLElement;

  click = document.createEvent('Event');

  @Prop()
  label: string;

  @Prop()
  type: 'default' | 'primary' | 'secondary' = 'default';

  @Prop()
  disabled: boolean;

  constructor() {
    this.click.initEvent('clickButton', true, true);
  }

  getClass(){
    return `${this.type} ${this.disabled ? 'disabled' : ''}`;
  }

  onClick() {
    console.log('entrou onClick')
    this.el.dispatchEvent(this.click)
  }

  render() {
    return (
      <Host>
        <button
          onClick={() => this.onClick()}
          class={this.getClass()}>
          {this.label}
        </button>
      </Host>
    );
  }

}
