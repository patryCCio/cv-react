// https://websamuraj.pl/examples/react/zadanie-lista/
// Wykorzystaj dwa komponenty: rodzica ( o nazwie List) i dziecka (o nazwie Person)

const Person = (props) => {
  return (
    <li>
      <span>{props.name}</span>
      <button id={props.id} onClick={props.delete}>Usuń</button>
    </li>
  );
};

class List extends React.Component {
  state = {
    people: [
      {
        id: 0,
        name: "Patryk S.",
      },

      {
        id: 1,
        name: "Monika Ś.",
      },

      {
        id: 2,
        name: "Julia W.",
      },

      {
        id: 3,
        name: "Jakub M.",
      },
    ],

    value: "",
  };

  handleChangeValue = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleDelete = (e) => {
    const number = Number.parseInt(e.target.id);
    
    let guests = [...this.state.people];

    guests.splice(number, 1);
    
    for(let x=0; x<guests.length; x++){
      guests[x].id = x;
    }

    console.log(guests);
  
    this.setState({
      people: guests
    })
  };

  guestList = () => {
    const guests = this.state.people;
    return guests.map((guest) => {
      return <Person name={guest.name} id={guest.id} key={guest.id} delete={this.handleDelete}></Person>;
    });
  };

  handleAddPerson = () => {
    if(this.state.value === ''){
      alert('Wpisz imię i nazwisko!');
      return null;
    }

    const guests = this.state.people;
    guests.push({ id: guests.length, name: this.state.value });

    this.setState({
      people: guests,
      value: "",
    });
  };

  render() {
    const { value, people } = this.state;

    return (
      <>
        <label htmlFor="person">Imię i nazwisko: </label>
        <input
          type="text"
          name="person"
          value={value}
          onChange={this.handleChangeValue}
        />
        <br />
        <br />
        <button onClick={this.handleAddPerson}>Dodaj osobę</button>
        {people.length > 0 ? (
          <h2>Liczba zaproszonych: {people.length}</h2>
        ) : null}
        {this.state.people.length > 0 ? <h1>Lista gości:</h1> : <h1>Brak zaproszonych gości!</h1>}
        <ul>{this.guestList()}</ul>
      </>
    );
  }
}

ReactDOM.render(<List></List>, document.getElementById("root"));
