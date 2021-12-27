import React from 'react';
import { ConfigProvider, Modal } from 'antd';
import { Provider } from 'react-redux';
import store from './store';

export function rootContainer(container: React.ReactNode) {
  return React.createElement(
    Provider,
    { store },
    React.createElement(ConfigProvider, {}, container),
  );
}
