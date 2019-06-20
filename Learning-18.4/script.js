const GalleryItem = React.createClass({
    propTypes: {
      image: React.PropTypes.object.isRequired,
    },
  
    render: function() {
      return (
        React.createElement('div', {},
          React.createElement('h2', {}, this.props.image.name),
          React.createElement('img', {src: this.props.image.src})
        )
      )
    },
  });



// REMOVE AFTER FINISH
console.log('React.PropTypes', React.PropTypes, typeof React.PropTypes);
console.log('GalleryItem.propTypes', GalleryItem.propTypes, typeof GalleryItem.propTypes);

const image = {
    name: 'kotek',
    src: 'http://imgur.com/n8OYCzR.png'
};

const element = React.createElement(GalleryItem, { image: image });
ReactDOM.render(element, document.getElementById('app'));




//ReactDOM.render(______, document.getElementById('app'));