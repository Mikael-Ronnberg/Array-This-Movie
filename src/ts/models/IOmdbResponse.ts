import { IMovie } from "./IMovie";

export interface IOmdbResponse {
    totalResult: string;
    Search: IMovie [];
}