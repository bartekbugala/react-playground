const movies = [
    {
        id: 1,
        title: 'Władca Pierścieni: Drużyna Pierścienia',
        poster: 'https://ssl-gfx.filmweb.pl/po/10/65/1065/6900087.3.jpg',
        desc: 'Adaptacja pierwszej części trylogii Tolkiena'
    },
    {
        id: 2,
        title: 'Potop',
        poster: 'https://ssl-gfx.filmweb.pl/po/11/85/1185/7637763.3.jpg',
        desc: 'film na podstawie powieści Sienkiewicza pod tym samym tytułem'
    },
    {
        id: 3,
        title: 'Rejs',
        poster: 'https://ssl-gfx.filmweb.pl/po/07/51/751/7575866.3.jpg',
        desc: 'film Barei'
    }
];

const moviesElements = movies.map(function (movie) {
    return React.createElement('li', {key:movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.poster})
    );
});

const element = React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
);

ReactDOM.render(element, document.getElementById('app'));
