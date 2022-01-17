import { styled } from 'baseui';

function Container({ children }) {
	const StyledContainer = styled('div', {
		padding: '20px',
		display: 'flex',
		flexDirection: 'column',
		maxWidth: '1300px',
		margin: 'auto',
	});

	return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
