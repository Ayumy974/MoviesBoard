import React, { useState } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

import Movies from '../pages/Movies/Movies';
import MovieDetails from '../pages/movieDetails/MovieDetails';
import Navigation from '../components/navigation/Navigation';
import DeleteModal from '../components/deleteModal/DeleteModal';

const Layout = ({children}) => {
    
    const [displayModal, setDisplayModal] = useState(false);

    const showDeleteMessage = () => setDisplayModal(true);    
    const hideDeleteMessage = () => setDisplayModal(false);    

    return (
        <Router>
            <ScrollToTop>
                <Navigation/>
                <main>
                    <article>
                        {children}
                        <Route exact path='/' component={(props) => (<Movies {...props} showMessage={showDeleteMessage}/>)}/>
                        <Route exact path='/movies/:id' component={(props) => (<MovieDetails {...props} showMessage={showDeleteMessage}/>)}/>
                    </article>
                    <DeleteModal showModal={displayModal} hideModal={hideDeleteMessage} />
                </main>
            </ScrollToTop>       
        </Router>
    );
}


export default Layout;
