import React from 'react';
import { Container, Skeleton } from './styles';

export const SkeletonContainer = ({ width, height }) => {
  return (
    <Container width={width} height={height}>
      <Skeleton />
    </Container>
  );
};
