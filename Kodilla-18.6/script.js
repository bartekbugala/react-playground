const consoleSpacer = function () {
    console.log('-------------------------------------------')
}

const Counter = React.createClass({
  getDefaultProps: function() {
    console.log('getDefaultProps() = FAZA INICJALIZACJI: (czasem rozdzielana jest na inicjalizację i montowanie, a czasem te dwa terminy używane są zamiennie) Komponent przyjmuje domyślne wartości propsów, które nie zostały przekazane do komponentu.');
    consoleSpacer();  
},
  getInitialState: function() {
    console.log(
      '(getInitialState() = FAZA INICJALIZACJI: - Stan wyjściowy komponentu - bardzo ważny, jeśli chcemy stanu używać - nie wolno odwoływać się do stanu nie ustawionego w tej metodzie. W ogóle stanu powinno się używać najrzadziej jak to możliwe'
    );
    consoleSpacer();
    return {
      counter: 0,
      counter2: 1
    };
  },

  increment: function() {
    this.setState({
      counter: this.state.counter + 1
    });
  },

  decrement: function() {
    this.setState({
      counter: this.state.counter - 1
    });
  },
  multiply: function() {
    this.setState({
      counter2: this.state.counter2 * 2
    });
  },

  divide: function() {
    this.setState({
      counter2: this.state.counter2 / 2
    });
  },
  reset: function() {
    this.setState({
      counter: (this.state.counter = 0),
      counter2: (this.state.counter2 = 1)
    });
  },

  componentWillMount: function() {
    console.log(
      'componentWillMount() = FAZA MONTOWANIA (inicjalizacji) - Cóż mogę zrobić? Niewiele, bo nie ma jeszcze komponentu, na który mógłbym wpłynąć. Można tutaj ew. zobaczyć wywołania AJAX, które ładują dane dla komponentów, ale nie jest to dobra praktyka. Ogromna większość aplikacji prawodopodobnie nie używa tej metody.'
      );
      consoleSpacer();
  },

  render: function() {
    console.log(
      'render() FAZA MONTOWANIA (inicjalizacji) LUB AKTUALIZACJI - Najważniejsza i jedyna obligatoryjna metoda komponentu - renderujemy komponent w fazie inicjalizacji oraz aktualizacji'
    );
    consoleSpacer();
    const btnStyle = {
      margin: '5px',
      backgroundColor: 'lightgreen'
    };
    const style = {
      backgroundColor: 'lightblue',
      listStyle: 'none',
      padding: '10px'
    };
    return React.createElement(
      'div',
      {},
      React.createElement(
        'div',
        { style: style },
        React.createElement('span', {}, 'Licznik +/-: ' + this.state.counter),
        React.createElement('button', { onClick: this.increment, style: btnStyle }, '+1'),
        React.createElement('button', { onClick: this.decrement, style: btnStyle }, '-1')
      ),
      React.createElement(
        'div',
        {},
        React.createElement('span', {}, 'Licznik *//: ' + this.state.counter2),
        React.createElement('button', { onClick: this.multiply, style: btnStyle }, '*2'),
        React.createElement('button', { onClick: this.divide, style: btnStyle }, '/2')
      ),
      React.createElement('button', { onClick: this.reset }, 'Reset')
    );
  },

  componentDidMount: function(){
      console.log('componentDidMount() = FAZA MONTOWANIA (inicjalizacji) - Komponent zamontowany - mamy pewność, że został zamontowany i można np. używając AJAX aktualizować komponent, Można dodawać event listenery, można edytować wygląd komponentu itp...')
      consoleSpacer();
  },

  componentWillReceiveProps: function() {
    console.log(
      'componentWillReceiveProps() = FAZA AKTUALIZACJI (dotyczy tylko propsó nie STATE) Zanim komponent otrzyma nowe propsy w fazie aktualizacji - można wywołać tę metodę - mamy dostęp do this.props - czyli obecnych propsów i next.props, czyli propsów "nadchodzących"- nowych. Można zatem dokonać walidacji, czy propsy się zmieniły czy też nie - jeśli zmieniły można ustawić stan (setState)'
    );
    consoleSpacer();
  },
  shouldComponentUpdate: function() {
    console.log(
     'shouldComponentUpdate() = FAZA AKTUALIZACJI Zwraca boolean (domyślny true) Sprawdzamy czy powinniśmy aktualizować komponent - co jest domyślnym działaniem Reacta, ale tutaj można wykonać to samemu, dzięki temu mozna poprawić wydajność aplikacji i nie marnować zasobów na niepotrzebne rendery, czyli np. renderować tylko jeśli zmienią się kluczowe propsy itp. - NIE MOŻNA WYWOŁAĆ UST. STANU (setState)'
    );
    consoleSpacer();
    return true; // Boolean zwracany
  },
  componentWillUpdate: function() {
    console.log(
      'componentWillUpdate() = FAZA AKTUALIZACJI Wiemy już, że komponent zostanie zaktualizowany, ponieważ poprzednia metoda zwróciła true. Kolejna prawie nie używana metoda - NIE MOŻNA WYWOŁAĆ UST. STANU (setState)'
    );
    consoleSpacer();
  },
  componentDidUpdate: function() {
    console.log(
      'componentDidUpdate() = FAZA AKTUALIZACJI Komponent zaktualizowany - czas coś zrobić: Najczęściej aktualizowany jest DOM jako reakcja na zmianę stanu lub propsów. Można wywołać ust. stanu komponentu (setState)'
    );
    consoleSpacer();
  },
  componentWillUnmount: function() {
    console.log(
      'componentWillUnmount() = FAZA ODMONTOWYWANIA/USUWANIA = Ostatnie życzenie komponentu - np. posprzątaj po sobie komponencie - nie można wywołać setState'
    );
    consoleSpacer();
  }
});

const CountersList = React.createClass({
  propTypes: {
    array: React.PropTypes.array.isRequired
  },
  render: function() {
    const style = {
      backgroundColor: 'lightgrey',
      listStyle: 'none',
      padding: '10px'
    };
    const counters = this.props.array.map(function(element) {
      return React.createElement(Counter, { key: element });
    });

    return React.createElement('ul', { style: style }, React.createElement('li', {}, counters));
  }
});

const countersArray = [1, 2, 3];
const element = React.createElement(CountersList, { array: countersArray });

ReactDOM.render(element, document.getElementById('app'));