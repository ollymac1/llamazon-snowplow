import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BasketContext } from '../context/BasketContext';
import Container from '../components/shared/Conatainer/Container';
import { Heading, HeadingLevel } from 'baseui/heading';
import { Button, SIZE } from 'baseui/button';
import BasketItem from '../components/shared/BasketItem/BasketItem';
import { analytics } from '../utils/snowplow/config';

function Basket() {
	const navigate = useNavigate();
	const [basket, setBasket] = useContext(BasketContext);
	const [basketTotal, setBasketTotal] = useState(0);
	const [loading, setLoading] = useState(false);

	const calculateTotal = () => {
		let total = 0;
		if (basket.length === 0) {
			setBasketTotal(0);
		}
		for (let i = 0; i < basket.length; i++) {
			total = total + basket[i].price;
			setBasketTotal(total);
		}
	};
	useEffect(() => {
		calculateTotal();
	}, [basket]);

	const completeCheckout = () => {
		setLoading(true);
		setTimeout(() => {
			navigate('/thank-you');
			setBasket([]);

			analytics.track('completedCheckout', {
				category: 'Checkout',
				label: `checkout`,
				value: `${basketTotal}`,
			});
		}, 2000);
	};

	analytics.track('pageView', {
		category: 'Basket',
		label: `Basket`,
		value: `${basketTotal}`,
	});

	return (
		<Container>
			<HeadingLevel>
				<Heading>Basket</Heading>

				<Heading styleLevel={4}>Total Price £{basketTotal / 100}</Heading>
				<HeadingLevel></HeadingLevel>
			</HeadingLevel>
			{basket.map((item, index) => (
				<BasketItem
					key={index}
					title={item.title}
					price={item.price}
					image={item.imageUrl}
					index={index}
					setBasketTotal={setBasketTotal}
					product={item}
				/>
			))}
			<Button
				onClick={() => completeCheckout()}
				size={SIZE.large}
				disabled={basket.length === 0}
				isLoading={loading}
			>
				Complete Purchase
			</Button>
		</Container>
	);
}

export default Basket;
