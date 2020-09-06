import React, { useState } from "react";
import { Route } from "react-router-dom";
import Navigation from '../components/navigation/Navigation';
// import ButtonScrollTop from "./../../components/Navigation/ButtonScrollTop/ButtonScrollTop"

const Layout = ({children}) => {
    
    const [displayModal, setDisplayModal] = useState(false);

    const showDeleteMessage = () => setDisplayModal(!displayModal);    
    const path = [
        "/",
        "/movies",
        "/movies/edit/:id",
        "/movies/:id",
        "/movie/add",
    ];

    return (
        <>
            <Navigation/>
            <main>
                <article>
                    {children}
                    <Route exact path={path} ></Route>
                </article>
                {/* <Drawer showDrawer={this.state.showDrawer} hide={this.hideDrawer} /> */}
            </main>
            {/* <ButtonScrollTop showBtn={this.state.showBtn} /> */}
        </>
    );
}


export default Layout;
