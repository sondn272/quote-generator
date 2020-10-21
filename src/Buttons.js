import React from 'react';
import './Buttons.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTumblr} from '@fortawesome/free-brands-svg-icons';


const Buttons = ({click}) => {
	return (
		<div className="dif pt3">
			<a href='#' style={{'backgroundColor': '#AA3939', 'color': 'white'}}>
				<FontAwesomeIcon icon={faTwitter} />
			</a>
			<a href='#' style={{'backgroundColor': '#AA3939', 'color': 'white'}}>
				<FontAwesomeIcon  icon={faTumblr} 
				/>
			</a>
			<button type='button' onClick={click}>New Quote</button>
		</div>
	);
}

export default Buttons