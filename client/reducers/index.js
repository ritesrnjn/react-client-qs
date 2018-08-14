import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import counterReducer from 'client/routes/Counter/modules/counter';
import loaderReducer from 'client/components/common/Loader/loaderModule';

const rootReducer = combineReducers({
  form: formReducer,
  counter: counterReducer,
  loader: loaderReducer,
});

export default rootReducer;
