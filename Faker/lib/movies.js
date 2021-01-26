var Movies = function (faker) {
    var self = this;
    
    self.genre = function () {
        return faker.random.arrayElement(faker.definitions.movies.genre);
    };

    self.genre.schema = {
        "description": "Generates a genre.",
        "sampleResults": ["Action", "Comedy", "Drama"]
    };
};

module["exports"] = Movies;