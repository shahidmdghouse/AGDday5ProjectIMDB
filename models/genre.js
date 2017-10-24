var imdb = imdb || {};

(function (scope) {
    var counter = 0;

    function Genre(name) {
        this.name = name;
        this.movies = [];
        counter++;
        this._id = counter;
    }

    Genre.prototype.addMovie = function (movie) {
        this.movies.push(movie);
    }

    Genre.prototype.deleteMovie = function (movie) {
        var mIndex = this.movies.indexOf(movie);

        if (mIndex != -1) {
            this.movies.splice(mIndex, 1);
        }
    }

    Genre.prototype.deleteMovieById = function (movieId) {
        var mIndex;
        var i;

        for (i in this.movies) {
            if (this.movies[i]._id === movieId) {
                mIndex = i;
                break;
            }
        }

        if (mIndex) {
            this.movies.splice(mIndex, 1);
        }
    }

    Genre.prototype.getMovies = function () {
        return this.movies;
    }

    scope.getGenre = function (name) {
        return new Genre(name);
    }
})(imdb);


