import React from 'react';
import { Route, Switch} from "react-router-dom";
import { withRouter } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Projects from './Pages/Projects/Projects'
import Yoga from './Pages/Projects/About/Yoga'
import EducationProgram from "./Pages/Projects/About/EducationProgram";
import Music from "./Pages/Projects/About/Music";
import Contacts from "./Pages/Projects/About/Contacts";
import Photo from "./Pages/Projects/About/Photo";
import WhoIs from './Pages/Projects/About/WhoIs';
import AboutMe from "./Pages/Projects/About/AboutMe";
import Layout from './Layout/Layout';
// import Main from "./Pages/Projects/Articles/Layout/Homepage/Main/Main";
// import ViewArticle from "./Pages/Projects/Articles/Layout/ViewArticle/ViewArtice";
import CurrentNews from "./Pages/Projects/About/CurrentNews";
import NewArticle from "./Pages/Projects/Articles/Layout/NewArticle/NewArticle";
import LoginPage from "./Pages/Projects/Articles/Layout/LoginPage]/LoginPage";
import Video from "./Pages/Projects/About/Video";
export const HomeRoute = "/";
export const VideoRoute = "/video/";
export const ProjectsRoute = "/projects/";
export const WhoIsRoute = "/whois/";
export const PhotoRoute = "/photo/";
export const YogaRoute = "/yoga/";
export const MusicRoute = "/music/";
export const AboutMeRoute = "/about/";
export const ContactsRoute = "/contacts/";
export const EducationProgramRoute = "/eProgram/";
export const NewsRoute = "/news/";
export const NewNews = "/new/";
class Routing extends React.Component {
    render() {
        return (
            <Layout>
                <Route path={ HomeRoute } exact component={Home} />
                <Route path={ VideoRoute } exact component={Video} />
                <Route path={ NewsRoute } exact component={ CurrentNews } />
                <Route path={ NewNews } exact component={ NewArticle } />
                <Route path={ ProjectsRoute } component={Projects} />
                <Route path={ WhoIsRoute } exact component={WhoIs} />
                <Route path={ PhotoRoute } exact component={Photo} />
                <Route path={ EducationProgramRoute } exact component={EducationProgram} />
                <Route path= { MusicRoute } exact component={Music} />
                <Route path={AboutMeRoute } exact component={AboutMe} />
                <Route path={ YogaRoute } exact component={Yoga} />
                <Route path={ ContactsRoute } exact component={Contacts} />
                <Switch>
                    {/*<Route exact path="/main-articles">*/}
                    {/*    <Main/>*/}
                    {/*</Route>*/}
                    {/*<Route path="/article/:id">*/}
                    {/*    <ViewArticle/>*/}
                    {/*</Route>*/}
                    <Route path="/new">
                        <NewArticle/>
                    </Route>
                    <Route path="/login-page">
                        <LoginPage/>
                    </Route>
                </Switch>
            </Layout >
        );
    }
}
export default withRouter(Routing);
