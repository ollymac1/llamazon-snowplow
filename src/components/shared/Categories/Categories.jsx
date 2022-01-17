import { categories } from '../../../data/categories';
import CardItem from '../CardItem/CardItem';
import { Grid, Cell } from 'baseui/layout-grid';
import { useNavigate } from 'react-router-dom';

function Categories() {
	let navigate = useNavigate();
	return (
		<div style={{ marginTop: '-20%' }}>
			<Grid gridGaps={15} align='center'>
				{categories.map((category, index) => (
					<Cell span={4} key={index}>
						<CardItem
							image={category.imageURL}
							title={category.title}
							buttonText={'Shop Now'}
							onClick={() => navigate(`/category/${category.id}`)}
							description={category.description}
						/>
					</Cell>
				))}
			</Grid>
		</div>
	);
}

export default Categories;
