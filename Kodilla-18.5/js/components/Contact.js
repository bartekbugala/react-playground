var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function () {
    return (
      React.createElement('div', { className: 'contactItem row' },
        React.createElement('div', { className: 'col-2 contactCol' },
          React.createElement('img', {
            className: 'contactImage',
            src: './images/contacts.svg'
          })),
        React.createElement('div', { className: 'col-8 contactCol' },
          React.createElement('p', { className: 'contactLabel' }, 'Imię: ' + this.props.item.firstName),
          React.createElement('p', { className: 'contactLabel' }, 'Nazwisko: ' + this.props.item.lastName),
          React.createElement('a', { className: 'contactEmail', href: 'mailto:' + this.props.item.email },
            this.props.item.email
          )),
          React.createElement('div', { className: 'col-2 contactCol' },
          React.createElement('img', {
            className: 'contactInfoIcon',
            src: './images/info.svg'
          })),

      )
    )
  },
});