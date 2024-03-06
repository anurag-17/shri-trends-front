import { combineReducers,configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import authReducer from "./adminSlice/authSlice";
import  authDealSlice  from './dealerSlice/authSlice';


const rootReducer = combineReducers({
  auth: authReducer,
  dealer: authDealSlice,
  //add all your reducers here
},);

const persistConfig = {
  key: 'root',
  storage,
  // Optionally, you can blacklist specific reducers if you don't want to persist them
  // blacklist: ['auth']
};


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);


