import Container from '../components/shared/Conatainer/Container';
import banner from '../assets/img/llamma-banner.jpg';
import { styled } from 'baseui';
import Categories from '../components/shared/Categories/Categories';
import { analytics } from '../utils/snowplow/config';

const Banner = styled('img', {
	display: 'inline-block',
	margin: 'auto',
	width: '100%',
});

function Home() {
	analytics.track('pageView', {
		category: 'Category',
		label: 'Home',
	});

	return (
		<Container>
			<Banner src={banner} alt='llama home banner' />
			<Categories />
		</Container>
	);
}

export default Home;
