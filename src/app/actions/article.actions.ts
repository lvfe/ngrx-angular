import { Action } from '@ngrx/store';
import { Article } from '../model/article';

export const JAVA = 'Java';
export const AUGULAR = 'Augular';
export const MY_ARTICLES = 'Favorite_Articles';

export class JavaArticlesAction implements Action {
    readonly type = JAVA;
}
export class AugularArticlesAction implements Action {
    readonly type = AUGULAR;
}
export class FavoriateArticlesAction implements Action {
    readonly type = MY_ARTICLES;
}

export type All = JavaArticlesAction | AugularArticlesAction | FavoriateArticlesAction;