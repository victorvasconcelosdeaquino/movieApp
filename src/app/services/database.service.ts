// import { Injectable } from '@angular/core';

// const DB_MOVIES = 'mymovies';

// export interface Movie {
//   title: string,
//   year: number,
//   imdbID: string,
//   type: string,
//   poster: string
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class DatabaseService {
//   private sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQlite);
//   private db!: SQLiteConnection;
//   private movie: WritableSignal<Movie[]> = signal<Movie[]>([]);

//   constructor() { }

//   async initializePlugin(){
//     this.db = await this.sqlite.createConnection(
//       DB_MOVIES,
//       false,
//       'no-encryption',
//       1,
//       false
//     );
    
//     await this.db.open();

//     const schema = `CREATE TABLE IF NOT EXISTS movies (
//       imdbID: text not null,
//       title: text not null,
//       year: integer,
//       type: text not null,
//       poster: text not null,
//       onList: integer,
//       isWatched: integer
//     );`;
  
//     await this.db.execute(schema);
//     this.loadWatched();
//     return true;
//   }

//   async loadWatched(){
//     const movies = this.db.query('select * from movies where isWatched = 1;')
//     this.movie.set(movies.values || []);
//   }  

//   async addMovieWatched(movie: any){
//     const query = `insert into movies imdbID,
//                                       title,
//                                       year,
//                                       type,
//                                       poster,
//                                       onList,
//                                       isWatched
//                                 values ('${movie.imdbID}',
//                                     '${movie.Title},
//                                     '${movie.Year},
//                                     '${movie.Type},
//                                     '${movie.Poster},
//                                     0,
//                                     1)`;
//   }
// }
