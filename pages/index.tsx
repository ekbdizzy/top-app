import type {NextPage} from 'next';
import {Htag} from "../components";


const Home: NextPage = () => {
    return <div>
        <Htag tag='h1'>Header 1</Htag>
        <Htag tag='h2'>Header 2</Htag>
        <Htag tag='h3'>Header 3</Htag>
    </div>;
};

export default Home;
