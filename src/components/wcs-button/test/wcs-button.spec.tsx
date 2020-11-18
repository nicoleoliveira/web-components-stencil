import { newSpecPage } from '@stencil/core/testing';
import { WcsButton } from '../wcs-button';

describe('wcs-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcsButton],
      html: `<wcs-button></wcs-button>`,
    });
    expect(page.root).toEqualHtml(`
      <wcs-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wcs-button>
    `);
  });
});
