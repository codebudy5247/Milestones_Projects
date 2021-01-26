if (typeof module !== 'undefined') {
    var assert = require('assert');
    var sinon = require('sinon');
    var faker = require('../index');
}

describe("movies.js", function () {
    describe("genre()", function () {
        it("returns a genre", function () {
            sinon.stub(faker.movies, 'genre').returns('Action');
            var genre = faker.movies.genre();


/*var stub = sinon.stub();

Creates an anonymous stub function
var stub = sinon.stub(object, "method");

Replaces object.method with a stub function. An exception is
thrown if the property is not already a function.

The original function can be restored by calling
object.method.restore();.
 */

            assert.equal(genre, 'Action');
            faker.movies.genre.restore();
        });
    });
});