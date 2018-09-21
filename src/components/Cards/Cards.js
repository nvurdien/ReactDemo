import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";

const Card = ({name, bio, age, image, email}) => (
    <div>
        <div className="uk-card uk-card-default uk-card-hover uk-animation-toggle">
            <div className="uk-card-header">
                <div className="uk-grid-small uk-flex-middle" uk-grid="">
                    <div className="uk-width-auto">
                        <img className="uk-border-circle" alt={name + "'s headshot image"} width="75" height="75" src={image} />
                    </div>
                    <div className="uk-width-expand">
                        <h3 className="uk-card-title uk-margin-remove-bottom">{name}</h3>
                        <p className=" uk-margin-remove-top uk-label">{age}</p>
                    </div>
                </div>
            </div>
            <div className="uk-card-body">
                <p>{bio}</p>
            </div>
            <div className="uk-card-footer">
                <a href={"mailto:" + email} aria-label={name + "'s email link"} className="uk-icon-button  uk-margin-small-right uk-animation-scale-up"><FontAwesomeIcon icon="envelope"/></a>
            </div>

        </div>
    </div>
);

const Cards = ({cards}) => (
    <div className="uk-child-width-1-3@m uk-child-width-1-2@s uk-grid-small" uk-scrollspy="cls: uk-animation-fade; target: > div > .uk-card; repeat: true" uk-grid="">
        {
            cards.map((card, i) => (
                <Card
                    key={cards[i].id}
                    name={cards[i].name}
                    bio={cards[i].company.catchPhrase}
                    email={cards[i].email}
                    age={cards[i].username}
                    image={cards[i].avatar}
                />
            ))
        }
    </div>
);

export default Cards;