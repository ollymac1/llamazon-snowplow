import { Card, StyledBody, StyledAction } from 'baseui/card';
import { Button } from 'baseui/button';
import { StarRating } from 'baseui/rating';

function CardItem({
	title,
	description,
	image,
	buttonText,
	onClick,
	width,
	rating,
}) {
	return (
		<Card
			overrides={{
				Root: {
					style: { width: `${width ? width : '375px'}` },
				},
			}}
			headerImage={{
				src: `${image}`,
				height: '395px',
				width: '100%',
			}}
			title={title}
		>
			{rating && <StarRating numItems={5} size={15} value={rating} readOnly />}
			<StyledBody>{description}</StyledBody>
			<StyledAction>
				<Button
					onClick={onClick}
					overrides={{ BaseButton: { style: { width: '90%' } } }}
				>
					{buttonText}
				</Button>
			</StyledAction>
		</Card>
	);
}

export default CardItem;
