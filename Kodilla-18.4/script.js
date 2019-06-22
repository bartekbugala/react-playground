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

const MovieTitle = React.createClass({
  proptTypes: {
    title: React.PropTypes.string.isRequired
  },
  render: function() {
    return React.createElement('h2', {}, this.props.title);
  }
});

const MovieDesc = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired
  },
  render: function() {
    return React.createElement('p', {}, this.props.desc);
  }
});

const MoviePoster = React.createClass({
  propTypes: {
    poster: React.PropTypes.string.isRequired
  },
  render: function() {
    return React.createElement('img', { src: this.props.poster });
  }
});

const Movie = React.createClass({
  propTypes: {
    film: React.PropTypes.object.isRequired
  },
  render: function() {
    return React.createElement(
      'li',
      {},
      React.createElement(MovieTitle, { title: this.props.film.title }),
      React.createElement(MovieDesc, { desc: this.props.film.desc }),
      React.createElement(MoviePoster, { poster: this.props.film.poster })
    );
  }
});

const moviesElements = movies.map(function(someMovie) {
  return React.createElement(Movie, { film: someMovie, key: someMovie.id });
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
      React.createElement('ul', {}, this.props.items)
    );
  }
});

const moviesList = React.createElement(MoviesList, { items: moviesElements });

ReactDOM.render(moviesList, document.getElementById('app'));
