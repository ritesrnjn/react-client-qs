// @flow
import React, { Component } from 'react';
import Chunk from 'client/components/Chunk';

const loadContainer = () => import('./containers' /* webpackChunkName: "appReg" */);

class FapTime extends Component<{}> {
  render() {
    return <Chunk load={loadContainer} />;
  }
}

export default FapTime;
