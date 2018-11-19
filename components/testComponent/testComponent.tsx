import * as React from 'react';
import testComponentWrapper from './testComponent.styled.ts'; 

export interface IProps {
  children?: any;
}

const testComponent: React.StatelessComponent<IProps> = ({ children = null }) => {
  return (<div>testComponent</div>)
}

export default testComponent;
