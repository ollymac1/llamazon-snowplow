import { useParams } from 'react-router-dom';
import Container from '../components/shared/Conatainer/Container';
import { Heading, HeadingLevel } from 'baseui/heading';
import { products } from '../data/products';
import Products from '../components/shared/Products/Products';
import { analytics } from '../utils/snowplow/config';

function Category() {
	const params = useParams();
	const filteredProducts = products.filter(
		(product) => product.category === params.id
	);

	analytics.track('pageView', {
		category: 'Category',
		label: `${params.id}`,
	});

	return (
		<Container>
			<HeadingLevel>
				<Heading>{params.id}</Heading>
			</HeadingLevel>
			<Products products={filteredProducts} />
		</Container>
	);
}

export default Category;
