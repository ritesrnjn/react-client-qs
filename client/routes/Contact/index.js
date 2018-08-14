// @flow
import React, { Component } from 'react';
import Chunk from 'client/components/Chunk';

const loadContainer = () => import('./containers' /* webpackChunkName: "frontDesk" */);

class FrontDesk extends Component<{}> {
  render() {
    return <Chunk load={loadContainer} />;
  }
}

export default FrontDesk;
