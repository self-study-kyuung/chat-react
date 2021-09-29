import { combineReducers } from 'redux';

const reducer = (prevState, action) => {
	switch (action.type) {
		default:
			return {
				prevState,
			};
	}
};

const rootReducer = combineReducers({ reducer });

export default rootReducer;
