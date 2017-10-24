var imdb = imdb || {};

(function (scope) {
    'use strict';

    var counter = 0;

    function Movie(title, lengthInMin, rating, country) {
        this.title = title;
        this.length = lengthInMin;
        this.rating = rating;
        this.country = country;
        this._actors = [];
        this._reviews = [];

        counter++;
        this._id = counter;
    }

    Movie.prototype.addActor = function (actor) {
        this._actors.push(actor);
    }

    Movie.prototype.getActors = function () {
        return this._actors;
    }

    Movie.prototype.addReview = function (review) {
        this._reviews.push(review);
    }

    Movie.prototype.deleteReview = function (review) {
        var rIndex = this._reviews.indexOf(review);

        if (rIndex !== -1) {
            this._reviews.splice(rIndex, 1);
        }
    }

    Movie.prototype.deleteReviewById = function (reviewId) {
        var rIndex;
        var i;

        for (i in this._reviews) {
            if (this._reviews[i]._id === reviewId) {
                rIndex = i;
                break;
            }
        }

        if (rIndex) {
            this._reviews.splice(rIndex, 1);
        }
    }

    Movie.prototype.getReviews = function () {
        return this._reviews;
    }

    scope._movie = Movie;

    scope.getMovie = function (title, lengthInMin, rating, country) {
        return new Movie(title, lengthInMin, rating, country);
    }
})(imdb);