// @flow
import React, { Component } from 'react';
import Chunk from 'client/components/Chunk';

const loadContainer = () =>
  import('./containers/CounterContainer' /* webpackChunkName: "appReg" */);

class Help extends Component<{}> {
  render() {
    return <Chunk load={loadContainer} />;
  }
}

export default Help;
