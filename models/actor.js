var imdb = imdb || {};

(function (scope) {
    var counter = 0;

    function Actor(name, bio, born) {
        this.name = name;
        this.bio = bio;
        this.born = born;
        counter++;
        this._id = counter;
    }

    scope.getActor = function (name, bio, born) {
        return new Actor(name, bio, born);
    }
})(imdb);