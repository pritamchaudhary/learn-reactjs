import incdecReducer from './reducers/index'
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
    reducer: {
        number: incdecReducer
    }
}, window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_())