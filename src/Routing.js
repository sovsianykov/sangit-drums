import React from 'react';
import { Route } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Projects from './Pages/Projects/Projects'
import WhoIs from './Pages/Projects/About/WhoIs'
import Layout from './Layout/Layout';
export const HomeRoute = "/";
export const ProjectsRoute = "/projects/";
export const WhoIsRoute = "/whois/";
class Routing extends React.Component {
    render() {
        return (
            <Layout>
                <Route path={HomeRoute} exact component={Home} />
                <Route path={ProjectsRoute} component={Projects} />
                <Route path={WhoIsRoute} component={WhoIs} />
            </Layout >
        );
    }
}
export default withRouter(Routing);
