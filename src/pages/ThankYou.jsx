import { Display1 } from 'baseui/typography';
import llama from '../assets/img/llama.png';

function ThankYou() {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				minHeight: '50vh',
				maxWidth: '98%',
			}}
		>
			<img src={llama} style={{ width: '120px' }} alt='llamazon llama' />
			<Display1 marginBottom='scale500'>Thanks!</Display1>
		</div>
	);
}

export default ThankYou;
