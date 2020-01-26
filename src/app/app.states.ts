import { Article } from './model/article';
export interface AppState {
    articleState: ArticleState
}

export interface ArticleState {
    articles: Article[];
}