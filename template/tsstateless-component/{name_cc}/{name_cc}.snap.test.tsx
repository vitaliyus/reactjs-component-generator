import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {{ name_cc }} from './{{name_cc}}';

it('renders correctly', () => {
  const tree = renderer
    .create(<{{name_cc}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
