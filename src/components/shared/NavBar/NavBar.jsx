import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppNavBar, setItemActive } from 'baseui/app-nav-bar';
import { Delete, ChevronRight } from 'baseui/icon';
import { Fade } from 'react-awesome-reveal';
import logo from '../../../assets/img/llamazon_logo.png';
import { BasketContext } from '../../../context/BasketContext';
import { styled } from 'baseui';
import { Label2 } from 'baseui/typography';

function NavBar() {
	const navigate = useNavigate();
	const [basket, setBasket] = useContext(BasketContext);
	const [basketTotal, setBasketTotal] = useState(0);

	useEffect(() => {
		let total = 0;
		for (let i = 0; i < basket.length; i++) {
			total = total + basket[i].price;
			setBasketTotal(total / 100);
		}
	}, [basket]);

	const [mainItems, setMainItems] = useState([
		{ label: 'Toys' },
		{ label: 'Household' },
		{ label: 'Clothing' },
		{ label: 'Gifts' },
		{ label: 'Garden' },
		{ label: 'Books' },
	]);

	const BasketInfo = styled('div', {
		background: 'black',
		color: 'white',
		cursor: 'pointer',
		':hover': {
			opacity: '0.8',
		},
	});

	return (
		<>
			<AppNavBar
				title={
					<img
						src={logo}
						height='40'
						style={{ marginTop: '10px', cursor: 'pointer' }}
						onClick={() => navigate('/')}
					/>
				}
				mainItems={mainItems}
				onMainItemSelect={(item) => {
					setMainItems((prev) => setItemActive(prev, item));
					navigate(`/category/${item.label}`);
					console.log(item);
				}}
				username='Jon Doe'
				usernameSubtitle='5 Stars'
				userItems={[
					{ icon: ChevronRight, label: 'Account' },
					{ icon: ChevronRight, label: 'Orders' },
					{ icon: ChevronRight, label: 'Returns' },
					{ icon: ChevronRight, label: 'Lists' },
					{ icon: ChevronRight, label: 'Recommendations' },
					{ icon: ChevronRight, label: 'Subscriptions' },
					{ icon: ChevronRight, label: 'Sign Out' },
				]}
				onUserItemSelect={(item) => console.log(item)}
				userImgUrl='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
				//mapItemToNode={(item) => <div>Basket</div>}
			/>
			{basket.length > 0 && (
				<Fade>
					<BasketInfo>
						<Label2
							color='white'
							padding='15px'
							maxWidth='500px'
							margin='auto'
							onClick={() => navigate('/basket')}
						>
							{basket.length} item{basket.length > 1 && 's'} in your basket
							totalling £{basketTotal} | Checkout Now
						</Label2>
					</BasketInfo>
				</Fade>
			)}
		</>
	);
}

export default NavBar;
