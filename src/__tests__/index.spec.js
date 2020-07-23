import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App/App';

jest.mock('react-dom', () => ({
  render: jest.fn(),
}));

describe('Application root', () => {
  test('should render without crashing', () => {
    const div = document.createElement('div');
    div.id = 'root';
    document.body.appendChild(div);
    require('../index.tsx');
    expect(ReactDOM.render).toHaveBeenCalledWith(
      <App name="Андрей" />,
      document.getElementById('root'),
    );
  });
});
