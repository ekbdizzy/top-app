import type {NextPage} from 'next';
import {Button, Htag, P} from "../components";


const Home: NextPage = () => {
    return <div>
        <Htag tag='h1'>Header 1</Htag>
        <Htag tag='h2'>Header 2</Htag>
        <Htag tag='h3'>Header 3</Htag>
        <Htag tag='h2'>Buttons</Htag>
        <div>
            <Button appearance='ghost' arrow='down'>132232</Button>
            <Button appearance="primary" arrow='right'>132232</Button>
        </div>
        <div>
            <P>Hello, i'm a text M</P>
            <P size='s'>Hello, i'm a text S</P>
            <P size='l'>Hello, i'm a text L</P>
        </div>
    </div>;
};

export default Home;
