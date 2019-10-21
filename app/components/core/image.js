import React, { useState } from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { Indicator } from './indicator';

export const Image = (props) => {
  const [loadImage, setLoadImage] = useState(false);

  return (
    <>
      <Indicator isLoading={loadImage} />
      <StyledImage
        source={{ uri: props.source }}
        onLoadStart={() => setLoadImage(true)}
        onLoadEnd={() => setLoadImage(false)}
      />
    </>
  );
};

Image.propTypes = {
  source: PropTypes.string.isLoading,
};

const StyledImage = styled.Image`
  width: 50;
  height: 50;
`;
