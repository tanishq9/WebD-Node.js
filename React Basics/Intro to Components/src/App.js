import React,{Component} from 'react';

class ContactList extends React.Component{
  render(){
    const people = this.props.contacts
    console.log("Contacts is : ")
    console.log(people)
    return <ol>
      {people.map((person) => 
        <li key={person.name}>{person.name}</li>
      )}
    </ol>
  }
}

// Format of props for a component : <ContactList propName = {.....} />
class App extends React.Component {
  render(){
    return <div className="App">
      <ContactList contacts={[
            {name : 'Michael'},
            {name : 'Ryan'},
            {name : 'Tyler'}
        ]}
      />
      <ContactList contacts={[
            {name : '7'},
            {name : '8'},
            {name : '9'}
        ]}
      />
    </div>
  }
}

export default App;
