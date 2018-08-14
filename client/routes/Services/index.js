// @flow
import React, { Component } from 'react';
import Chunk from 'client/components/Chunk';

const loadContainer = () => import('./containers' /* webpackChunkName: "appReg" */);

class Eligibility extends Component<{}> {
  render() {
    return <Chunk load={loadContainer} />;
  }
}

export default Eligibility;
