import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import store from '../redux/configureStore';

test('renders learn react link', () => {
  const app = render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  expect(app).toMatchSnapshot();
});
