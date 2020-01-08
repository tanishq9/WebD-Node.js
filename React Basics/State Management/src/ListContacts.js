import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Contacts extends Component {
    // return react component JSX here, this component can also be combination of various React elements, all of this will be handled by JSX
    // curly braces are only used for expressions, use () for any other use inside the return of render method of React Component
    render(){
      const contacts = this.props.contacts
      return( 
      <ol className="contact-list">
        {
            contacts.map( (item) => ( 
            <li key={item.id} className="contact-list-item">
                <div className="contact-avatar" style={{ backgroundImage: `url(${item.avatarURL})` }} />
                <div className="contact-details">
                    <p>{item.name}</p>
                    <p>{item.email}</p>
                </div>
                <button onClick={()=>this.props.onDeleteContact(item.id)} className="contact-remove">
                    Remove
                </button>
            </li>
        ))}
      </ol>
      )
    }
}

Contacts.propTypes = {
    optionalArray: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
}

export default Contacts


// Stateless Functional Component : No this keyword is required here because functions have no context
/* function Contacts(props){
    const contacts = props.contacts
    return( 
    <ol className="contact-list">
      {
          contacts.map( (item) => ( 
          <li key={item.id} className="contact-list-item">
              <div className="contact-avatar" style={{ backgroundImage: `url(${item.avatarURL})` }} />
              <div className="contact-details">
                  <p>{item.name}</p>
                  <p>{item.email}</p>
              </div>
              <button className="contact-remove">
                  Remove
              </button>
          </li>
      ))}
    </ol>
    )    
}*/