var imdb = imdb || {};

(function (scope) {
    var counter = 0;

    function Review(author, content, date) {
        this.author = author;
        this.content = content;
        this.date = date;
        counter++;
        this._id = counter;
    }

    scope.getReview = function (author, content, date) {
        return new Review(author, content, date);
    }
})(imdb);