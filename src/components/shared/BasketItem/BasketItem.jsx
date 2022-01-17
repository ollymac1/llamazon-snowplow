import { styled } from 'baseui';
import { Label2 } from 'baseui/typography';
import { Button } from 'baseui/button';
import { useContext } from 'react';
import { BasketContext } from '../../../context/BasketContext';
import { analytics } from '../../../utils/snowplow/config';

function BasketItem({ price, title, image, index, product }) {
	const [basket, setBasket] = useContext(BasketContext);

	const Item = styled('div', {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: '10px',
	});

	const removeBasketItem = (val, product) => {
		const newBasket = basket.filter((item, itemIndex) => {
			return val !== itemIndex;
		});

		setBasket([...newBasket]);

		analytics.track('eCommerce', {
			category: 'removeFromBasket',
			label: `${product.id}`,
			value: `${product.price}`,
		});
	};

	return (
		<Item>
			<div
				style={{
					backgroundImage: `url(${image}) `,
					backgroundSize: 'cover',
					height: '200px',
					width: '200px',
				}}
			/>
			<Label2>{title}</Label2>
			<Label2>£{price / 100}</Label2>
			<Button onClick={() => removeBasketItem(index, product)}>Remove</Button>
		</Item>
	);
}

export default BasketItem;
