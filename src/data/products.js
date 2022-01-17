import tshirt from '../assets/img/products/llama-t.jpg';
import garden from '../assets/img/products/llama-garden.jpg';
import book from '../assets/img/products/llama-book.jpg';
import gift from '../assets/img/products/llama-gift.jpg';
import toy from '../assets/img/products/llama-toy.jpg';
import household from '../assets/img/products/llama-household.jpg';

export const products = [
	{
		title: 'Llama T Shirt',
		description:
			'Llama mia! Here we go again with a new lino print design. The t-shirt is printed using low waste technology by a certified organic company in the UK.',
		price: 2999,
		imageUrl: `${tshirt}`,
		category: 'Clothing',
		rating: 5,
		id: 1,
	},
	{
		title: 'Pink Garden Llama',
		description:
			'Attractive Llama Rama garden ornament made from metal with a pink body and a brightly coloured carpet saddle painted finish.',
		price: 3999,
		imageUrl: `${garden}`,
		category: 'Garden',
		rating: 3,
		id: 1,
	},
	{
		title: 'Plush Llama Doorstop',
		description:
			'You may know that llamas make excellent sheepherders and are known to spit in self-defense—but who knew that they’re also handy for holding doors? So courteous! This super-soft, South American helper with a sand-weighted bottom makes a delightful doorstop and a placid, pettable addition to your decor. ',
		price: 5999,
		imageUrl: `${gift}`,
		category: 'Gifts',
		rating: 4,
		id: 1,
	},
	{
		title: 'Llama Llama Red Pajama',
		description:
			'Baby Llama turns bedtime into an all-out llama drama in this rhyming read-aloud favorite! ',
		price: 399,
		imageUrl: `${book}`,
		category: 'Books',
		rating: 3,
		id: 1,
	},
	{
		title: 'Llama Trophy Head Wall Decoration',
		description:
			'Those with a love for llamas are sure to fall for this playful wall decoration by Hyde And Seek. Featuring a fluffy llama head accented with a realistic faux leather rein and vivid tassels, it lends tongue-in-cheek charm to any room and can be simply mounted onto the wall by a hidden rear hook.',
		price: 1099,
		imageUrl: `${household}`,
		category: 'Household',
		rating: 3,
		id: 1,
	},
	{
		title: 'Pink Pastel Llama Soft Toy',
		description:
			'This gorgeous pink llama plush has pastel rainbow feet and super soft huggable fur. This adorable soft toy is so on-trend and is perfect for gifting to a little one who loves llamas, or for an adult who loves them too.',
		price: 199,
		imageUrl: `${toy}`,
		category: 'Toys',
		rating: 1,
		id: 1,
	},
];
