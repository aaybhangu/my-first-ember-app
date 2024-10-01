import { module, test } from 'qunit';
import { setupRenderingTest } from 'my-first-ember-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | product/detail', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('price', {
      original: 50,
      current: 35,
    });
    this.get('onColorChange', function (color) {
      assert.equal(color, 'red');
    });
    this.set('colors', [{ color: 'red' }]);

    await render(hbs`<Product::Detail 
      @price={{this.price}}
      @colors={{this.colors}}
      @onColorChange={{this.onColorChange}}
      @isDetails={{true}}
      />`);
    assert.dom('[data-test-original-price]').hasText('$50.00');
    assert.dom('[data-test-current-price]').hasText('$35.00');

    await click('[data-test-color]');
  });
});
