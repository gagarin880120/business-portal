import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from '../App';
import { isExportDeclaration } from 'typescript';

describe('App', () => {
  describe('component', () => {
    test('should render without crashing', () => {
      const renderer = new ShallowRenderer();
      renderer.render(<App />);

      const result = renderer.getRenderOutput();

      expect(result).toMatchSnapshot();
    });
  });
});
