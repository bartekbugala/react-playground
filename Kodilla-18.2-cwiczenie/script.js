var element =
    React.createElement('div', {},
        React.createElement('ul', {},
            React.createElement('li', {},
                React.createElement('p', {}, 'Point1')
            ),
            React.createElement('li', {},
                React.createElement('p', {}, 'Point2')
            ),
            React.createElement('li', {},
                React.createElement('p', {}, 'Point3')
            ),
            React.createElement('li', {},
                React.createElement('p', {}, 'Point4')
            )
        )
    );

ReactDOM.render(element, document.getElementById('app'));