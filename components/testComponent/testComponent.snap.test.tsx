import * as React from 'react';
import * as renderer from 'react-test-renderer';
import testComponent from './testComponent';

it('renders correctly', () => {
  const tree = renderer
    .create(<testComponent />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
