import { Component, Prop } from '@stencil/core';

import * as mongoose from 'mongoose';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  @Prop() first: string;
  @Prop() last: string;

  componentDidLoad() {
    console.log('Mongoose loaded!', mongoose);
  }

  render() {
    return (
      <div>
        Hello, World! I'm {this.first} {this.last}
      </div>
    );
  }
}
