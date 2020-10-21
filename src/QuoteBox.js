import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft} from '@fortawesome/free-solid-svg-icons';

const QuoteBox = ({quote, author}) => {
	return(
		<div>
			<h1 className='mt0 tc fw7'><FontAwesomeIcon icon={faQuoteLeft} /> {quote}</h1>
			<p className='tr'>- {author}</p>
		</div>
	);
}

export default QuoteBox;