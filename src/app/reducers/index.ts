import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as load from '../actions/loading';

export const initialState = false;

export const reducers = (state: boolean = initialState, action: load.Actions) =>{
  switch(action.type) {
    case load.HIDE_LOADING:{
      state = false;
      return state;
    }
    case load.SHOW_LOADING:{
      state = true;
      return state;
    }
    default:
      return state
  }
}


export const metaReducers: MetaReducer<boolean>[] = !environment.production ? [] : [];
