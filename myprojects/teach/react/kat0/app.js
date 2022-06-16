// Nowy komponent wyświetlenie cyfr
// losowanie liczby 
// Wyświetlenie nazwy przycisku z obiektu props, ze zmiennej bezpośrednio lub z obiektu state.


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: ""
    }

    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    const number = Math.floor(Math.random() * 10);
    this.setState({
      text: this.state.text + number
    })
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick}>Dodaj Cyfrę</button>
        <PanelResult name={this.state.text}></PanelResult>
      </>
    );
  }
}

const PanelResult = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}

ReactDOM.render(<App></App>, document.getElementById("root"));