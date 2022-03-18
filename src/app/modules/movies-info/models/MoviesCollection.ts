export namespace MoviesCollection {
  export namespace GetMoviesById {
    export interface Genres {
      id: number
      name: string
    }
    export interface Belongs_to_collection {
      id: number
      name: string
      poster_path: string
      backdrop_path: string
    }
    export interface Production_companies {
      id: number
      logo_path: string
      name: string
      origin_country: string
    }
    export interface Production_countries {
      iso_3166_1: string
      name: string
    }
    export interface Spoken_languages {
      english_name: string
      iso_639_1: string
      name: string
    }
    export interface Output {
      adult: boolean
      backdrop_path: string
      belongs_to_collection: Belongs_to_collection
      budget: number
      genres: Genres[]
      homepage: string
      id: number
      imdb_id: string
      original_language: string
      original_title: string
      overview: string
      popularity: number
      poster_path: string
      production_companies: Production_companies[]
      production_countries: Production_countries[]
      release_date: string
      revenue: number
      runtime: number
      spoken_languages: Spoken_languages[]
      status: string
      tagline: string
      title: string
      video: boolean
      vote_average: number
      vote_count: number
    }
    export type Input = number
  }
  export namespace GetMovies {
    export interface Movies {
      adult: boolean
      backdrop_path: string
      genre_ids: Array<number>
      origin_country?: Array<string>
      id: number
      media_type: string
      seasons?: number
      original_language: string
      original_title: string
      overview: string
      popularity?: number
      poster_path: string
      release_date: string
      title: string
      video: boolean
      vote_average: number
      vote_count: number
    }
    export interface Output {
      page: number
      results: Movies[]
      total_pages: number
      total_results: number
    }
  }
}
