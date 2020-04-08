/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
const continents = ['North America', 'South America', 'Africa', 'Asia', 'Europe', 'Australia', 'Antartica']
const helloContinents = Array.from(continents, c => `Hello ${c}!`)
const message = helloContinents.join('\n')
const element = (
    <div title="Outer div">
        <h1>{message}</h1>
    </div>
)
ReactDOM.render(element, document.getElementById('content'))