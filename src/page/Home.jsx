import './Home.scss';

import Header from '../components/Header/Header';
import Form from '../components/Form/Form';
import Filters from '../components/Filters/Filters';
import Hebergement from '../components/Hebergement/Hebergement';
import Populaire from '../components/Populaire/Populaire';
import Activities from '../components/Activities/Activities';
import Footer from '../components/Footer/Footer';
import DisplayCard from '../components/DisplayedCard/DisplayCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';

import { useState, useEffect } from 'react';

export default function Home() {

    // Ici on initialise accomodations, populars et activities a un tableau vide
    const [accomodations, setAccomodations] = useState([]);
    const [populars, setPopulars] = useState([]);
    const [activities, setActivities] = useState([]);
    const [display, setDisplay] = useState(false);

    // On effectue une requête GET pour récupérer les données
    useEffect(() => {
        console.log("Before accomodations request");
    axios.get('http://localhost:3001/api/accommodations', { withCredentials: true })
      .then(response => {
        setAccomodations(response.data.accomodations);
        console.log(response.data.accomodations);
      })
      // Ici accomodations correspondra au body de la réponse renvoyé, à savoir un tableau des hebergements
      .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
      });
      console.log("After accomodations request");
        }, []);

    useEffect(() => {
    axios.get('http://localhost:3001/api/populars', { withCredentials: true })
    .then(response => {
      setPopulars(response.data.populars);
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des données:', error);
    });
    }, []);

    useEffect(() => {
        axios.get('http://localhost:3001/api/activities', { withCredentials: true })
        .then(response => {
          setActivities(response.data.activities);
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des données:', error);
        });
    }, []);

    return (
        <>
            <div className="conteneur-principal">
                <Header />
                <main>
                    <section className='recherches-filtres-info'>
                        <h1>Trouvez votre hébergement pour des vacances de rêve</h1>
                        <p>En plein centre-ville ou en pleine nature</p>
                        <Form />
                        <Filters />
                    </section>
                    <div className="hebergements-et-populaires">
                        <section className="hebergements" id="hebergements">
                            {
                            !display &&
                                <>
                                    <div className="titre">
                                        <h2 className="titre-section">Hébergements à Marseille</h2>
                                    </div>
                                    <div className="cartes-hebergements">
                                    {accomodations.map(hebergement => <Hebergement key={hebergement.title} hebergement={hebergement} display={display} setDisplay={setDisplay} /> )}
                                    </div>
                                    <p><b>Afficher plus</b></p>
                                </>
                            || 
                                <div className='displayed-container'>
                                    {accomodations.map(hebergement => <DisplayCard key={hebergement.title} hebergement={hebergement}/> )}
                                </div>
                            }
                        </section>
                        <section className="populaires">
                            <div className="titre">
                                <h2 className="titre-section">Les plus populaires</h2>
                                <FontAwesomeIcon icon={faChartLine} className='populaires-icon' aria-hidden="true"></FontAwesomeIcon>
                            </div>
                            <div className="populaires-cartes">
                                {populars.map(populaire => <Populaire key={populaire.title} populaire={populaire} /> )}
                            </div>
                        </section>
                    </div>
                    <section className="activités" id="activités">
                        <div className="titre">
                            <h2>Activités à Marseille</h2>
                        </div>
                        <div className="activités-cartes">
                            {activities.map(activity => <Activities key={activity.title} activity={activity} />)}
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    )
}