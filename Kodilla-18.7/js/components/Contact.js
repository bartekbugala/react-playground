var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired
  },
  render: function() {
    return (
      <div className={'contact-item row'}>
        <div className={'col-2 contact-col'}>
          <img className={'contact-image'} src={'./images/contacts.svg'} />
        </div>
        <div className={'col-8 contact-col'}>
          <p className={'contact-label'}>Imię: {this.props.item.firstName}</p>
          <p className={'contact-label'}>Nazwisko: {this.props.item.lastName}</p>
          <a className={'contact-email'} href={'mailto:' + this.props.item.email}>
            {this.props.item.email}
          </a>
        </div>
        <div className={'col-2 contact-col'}>
          <img className={'contact-info-icon'} src={'./images/info.svg'} />
        </div>
      </div>
    );
  }
});
