// @flow
import React, { Component } from 'react';
import Chunk from 'client/components/Chunk';

const loadContainer = () => import('./containers' /* webpackChunkName: "scheduling" */);

class Scheduling extends Component<{}> {
  render() {
    return <Chunk load={loadContainer} />;
  }
}

export default Scheduling;
