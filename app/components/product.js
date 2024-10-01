import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ProductComponent extends Component {
  productImage = this.args.productInfo.colors[0].image;
  productColor = this.args.productInfo.colors[0].color;
  productColors = this.args.productInfo.colors;
}
