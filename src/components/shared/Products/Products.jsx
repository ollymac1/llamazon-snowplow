import { useContext } from 'react';
import CardItem from '../CardItem/CardItem';
import { Grid, Cell } from 'baseui/layout-grid';
import { BasketContext } from '../../../context/BasketContext';
import { analytics } from '../../../utils/snowplow/config';

function Products({ products }) {
	const [basket, setBasket] = useContext(BasketContext);

	const addToCart = (product) => {
		analytics.track('eCommerce', {
			category: 'addToBasket',
			label: `${product.id}`,
			value: `${product.price}`,
		});

		setBasket((prevBasket) => [...prevBasket, product]);
	};
	return (
		<div>
			<Grid gridGaps={10}>
				{products.map((product, index) => (
					<Cell span={4} key={index}>
						<CardItem
							image={product.imageUrl}
							title={`${product.title} £${product.price / 100}`}
							buttonText={'Add to Cart'}
							onClick={() => addToCart(product)}
							description={product.description}
							rating={product.rating}
						/>
					</Cell>
				))}
			</Grid>
		</div>
	);
}

export default Products;
