import React, { Component } from 'react';
import './App.css';
import Cards from "./components/Cards/Cards";
import NavBar from "./components/NavBar/NavBar";
import ContactForm from "./components/ContactForm/ContactForm";
import 'uikit/dist/css/uikit-core.min.css'
import 'uikit/dist/css/uikit.min.css'
import 'uikit/dist/js/uikit-icons.min'
import 'uikit/dist/js/uikit.min'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas);

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            cards: [],
            searchInput: ''
        };
        this.onUpdate = this.onUpdate.bind(this)
    }

    onUpdate(event) {
        console.log(event);
        this.setState({searchInput: event.target.value})
    }

    componentDidMount(){
        fetch(`http://jsonplaceholder.typicode.com/users`)
            .then(res => res.json()).then(card => this.setState({cards: card})).then(() => {
                let current = this.state.cards;
                current.map((card, i) => current[i].avatar = 'https://picsum.photos/200?random');
                this.setState({cards: current});
            })
            .catch(err => {
                console.log(err);
            });

    }


    render() {
        const filteredCards = this.state.cards.filter(card => {
            return card.name.toLowerCase().includes(this.state.searchInput.toLowerCase());
        });
        return ( this.state.cards.length ?
            <div>
                <NavBar searchChange={this.onUpdate}/>
                <div className=''>
                    <div id='cards' className='uk-padding-large'>
                        <Cards cards={filteredCards}/>
                    </div>
                    <div className='uk-grid-small uk-child-width-1-1@s uk-child-width-1-2@m uk-flex-center' uk-grid="">
                        <ContactForm/>
                        <div id='contact' className='uk-section-primary uk-padding-large uk-text-left'>
                            <h1>Contact Info</h1>
                            <h3><FontAwesomeIcon icon="user"/> Your Name</h3>
                            <h3><FontAwesomeIcon icon="phone"/> (512) 123-1234</h3>
                            <h3><FontAwesomeIcon icon="envelope"/> asdf@gmail.com</h3>
                            <h3><FontAwesomeIcon icon="globe-americas"/> Austin, TX</h3>
                        </div>
                    </div>
                </div>
            </div> : <div className='uk-align-center uk-flex-center uk-position-center'><div uk-spinner="ratio:3"/></div>
        );
    }
}

export default App;
