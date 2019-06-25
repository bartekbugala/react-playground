const ce = React.createElement;

const Counter = React.createClass({
    getInitialState: function () {
        return {
            counter: 0,
            counter2: 1
        }
    },

    increment: function () {
        this.setState({
            counter: this.state.counter + 1
        })
    },

    decrement: function () {
        this.setState({
            counter: this.state.counter - 1
        })
    },
    multiply: function () {
        this.setState({
            counter2: this.state.counter2 * 2
        })
    },

    divide: function () {
        this.setState({
            counter2: this.state.counter2 / 2
        })
    },
    reset: function () {
        this.setState({
            counter: this.state.counter = 0,
            counter2: this.state.counter2 = 1
        })
    },

    render: function () {
        const style = {
            margin: '5px'
        }
        return ce('div', {},
            ce('div', {},
                ce('span', {}, 'Licznik +/-: ' + this.state.counter),
                ce('button', { onClick: this.increment, style: style }, '+1'),
                ce('button', { onClick: this.decrement, style: style }, '-1')),
            ce('div', {},
                ce('span', {}, 'Licznik *//: ' + this.state.counter2),
                ce('button', { onClick: this.multiply, style: style }, '*2'),
                ce('button', { onClick: this.divide, style: style }, '/2')),
            ce('button', { onClick: this.reset }, 'Reset')

        );
    }
})

const element = ce(Counter);
const element2 = ce(Counter);

const ManyCounters = React.createClass

ReactDOM.render(element, document.getElementById('app'));
ReactDOM.render(element2, document.getElementById('app2'));