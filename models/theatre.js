var imdb = imdb || {};

(function (scope) {

    function Theatre(name, lengthInMin, rating, country, isPuppet) {
        scope._movie.call(this, name, lengthInMin, rating, country);
        this.isPuppet = isPuppet;
    }

    Theatre.prototype = Object.create(scope._movie.prototype);
    Theatre.prototype.constructor = Theatre;

    scope.getTheatre = function (name, lengthInMin, rating, country, isPuppet) {
        return new Theatre(name, lengthInMin, rating, country, isPuppet);
    }
})(imdb);