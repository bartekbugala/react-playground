var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function () {
    return (
      React.createElement('div', { className: 'contact-item row' },
        React.createElement('div', { className: 'col-2 contact-col' },
          React.createElement('img', {
            className: 'contact-image',
            src: './images/contacts.svg'
          })),
        React.createElement('div', { className: 'col-8 contact-col' },
          React.createElement('p', { className: 'contact-label' }, 'Imię: ' + this.props.item.firstName),
          React.createElement('p', { className: 'contact-label' }, 'Nazwisko: ' + this.props.item.lastName),
          React.createElement('a', { className: 'contact-email', href: 'mailto:' + this.props.item.email },
            this.props.item.email
          )),
          React.createElement('div', { className: 'col-2 contact-col' },
          React.createElement('img', {
            className: 'contact-info-icon',
            src: './images/info.svg'
          })),

      )
    )
  },
});