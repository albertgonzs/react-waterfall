// @flow
/* eslint-disable no-undef */

import React, { Component } from 'react'

import type { CreateProvider, State } from '../types'

type Props = { children: React$Node }

const EnhancedProvider: CreateProvider = (
  setProvider,
  Provider,
  initialState,
) =>
  class EnhancedProvider extends Component<Props, State> {
    constructor() {
      super()
      this.state = initialState
      setProvider(this)
    }

    render() {
      return <Provider value={this.state}>{this.props.children}</Provider>
    }
  }

export default EnhancedProvider
