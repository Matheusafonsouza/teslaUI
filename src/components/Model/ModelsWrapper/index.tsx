import React from 'react';

import { Container } from './styles';

interface Props {
  children: any;
}

const ModelsWrapper: React.FC<Props> = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default ModelsWrapper;
