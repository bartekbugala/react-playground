const movies = [
    {
        title: 'Władca Pierścieni',
        desc: 'Adaptacja trylogii Tolkiena'
    },
    {
        title: 'Potop',
        desc: 'film na podstawie powieści Sienkiewicza pod tym samym tytułem'
    }
];

movies.push({title: 'Rejs', desc: 'film Barei'});


const moviesElements = movies.map(function (movie) {
    return {tytul: movie.title,
    opis: movie.desc}
});

console.log(moviesElements);