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

const Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired
  },
  render: function() {
    const movie = this.props.movie;

    return React.createElement(
      'li',
      {},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', { src: movie.poster })
    );
  }
});

const MoviesList = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired
  },

  render: function() {
    return React.createElement(
      'div',
      {},
      React.createElement('h1', {}, 'Lista filmów'),
      React.createElement('ul', {}, moviesElements)
    );
  }
});

const moviesElements = movies.map(function (movie) {
    return React.createElement(Movie, {movie: movie, key: movie.id})
});


const element = React.createElement(MoviesList, { items: movies });

ReactDOM.render(element, document.getElementById('app'));
