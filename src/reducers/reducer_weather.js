import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	switch(action.type) {
	case FETCH_WEATHER:
		//concat returns a new array with previous data adn new
		return [ action.payload.data, ...state ];
	}

	return state;
}