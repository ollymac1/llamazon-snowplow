import { styled } from 'baseui';
import { analytics } from '../../../utils/snowplow/config';

function Container({ children }) {
	const StyledContainer = styled('div', {
		display: 'inline-block',
		padding: '20px',
		display: 'flex',
		flexDirection: 'column',
		maxWidth: '1300px',
		margin: 'auto',
	});

	return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
