import React, { useState } from "react";
// import { Route } from "react-router-dom";
import { BrowserRouter as Switch, Route } from 'react-router-dom';

import Movies from '../pages/Movies/Movies';
import MovieDetails from '../pages/movieDetails/MovieDetails';
import Navigation from '../components/navigation/Navigation';
import DeleteModal from '../components/deleteModal/DeleteModal';
// import ButtonScrollTop from "./../../components/Navigation/ButtonScrollTop/ButtonScrollTop"

const Layout = ({children}) => {
    
    const [displayModal, setDisplayModal] = useState(false);

    const showDeleteMessage = () => setDisplayModal(true);    
    const hideDeleteMessage = () => setDisplayModal(false);    
    // const path = [
        // "/",
        // "/movies",
        // "/movies/edit/:id",
        // "/movies/:id",
        // "/movie/add",
    // ];

    return (
        <>
            <Navigation/>
            <main>
                <article>
                    {children}
                    {/* <Switch> */}
                        {/* <Route exact path='/'>
                            <Movies showMessage={showDeleteMessage} />
                        </Route>  */}
                        {/* <Route path='/movies/:id'>
                            <MovieDetails showMessage={showDeleteMessage} />
                        </Route>  */}
                    <Route exact path='/' component={(props) => (<Movies {...props} showMessage={showDeleteMessage}/>)}/>
                    <Route exact path='/movies/:id' component={(props) => (<MovieDetails {...props} showMessage={showDeleteMessage}/>)}/>
                        
                    {/* <Route exact path='/movies' render={(props) => <Movies {...props} showMessage={showDeleteMessage}/>}/> */}

                    {/* </Switch> */}

                </article>
                <DeleteModal showModal={displayModal} hideModal={hideDeleteMessage} />
            </main>
            {/* <ButtonScrollTop showBtn={this.state.showBtn} /> */}
        </>
    );
}


export default Layout;
