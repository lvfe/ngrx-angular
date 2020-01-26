import { ArticleState } from '../app.states';
import { Article, ANGULAR_ARTICLES, JAVA_ARTICLES, FAVORITE_ARTCLES } from '../model/article';
import { All, JAVA, AUGULAR, MY_ARTICLES } from '../actions/article.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
export const initialState: ArticleState = { articles: [] };

export function reducer(state = initialState, action: All): ArticleState {
    switch(action.type) {
        case JAVA: {
            return {articles: JAVA_ARTICLES};
        }
        case AUGULAR: {
            return {articles: ANGULAR_ARTICLES};
        }
        case MY_ARTICLES: {
            return {articles: FAVORITE_ARTCLES};
        }
        default: {
            return state;
        }
    }
}

export const getArticleState = createFeatureSelector<ArticleState>('articleState');

export const getArticles = createSelector(
    getArticleState,
    (state:ArticleState) => state.articles
);