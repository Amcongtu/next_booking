import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import { persistStore,persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['userReducer'],
}
const reducer = combineReducers({
    userReducer
})
const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer: {
        persistedReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false})
})
const persistor = persistStore(store)
export { store, persistor }