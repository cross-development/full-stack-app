//Core
import React from 'react';
//Components
import BeatLoader from 'react-spinners/BeatLoader';
//Styles
import { css } from '@emotion/core';
import { StyledLoaderWrap } from './Loader.styles';

const override = css`
	display: block;
	margin: 0 auto;
`;

const Loader = ({ onLoad }) => (
	<StyledLoaderWrap>
		<BeatLoader css={override} size={20} color={'#bebebe'} loading={onLoad} />
	</StyledLoaderWrap>
);

export default Loader;
