import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as articleReducer from './article.reducer';
import { AppState } from '../app.states';
export const initialState = false;

export const reducers:ActionReducerMap<AppState> = {
  articleState: articleReducer.reducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
