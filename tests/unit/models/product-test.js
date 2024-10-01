import { setupTest } from 'my-first-ember-app/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | product', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('product', {});
    assert.ok(model, 'model exists');
  });
});
