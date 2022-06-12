import type {NextPage} from 'next';
import {Button, Htag, Tag, P, Rating} from "../components";
import {useEffect, useState} from "react";


const Home: NextPage = () => {
    const [counter, setCounter] = useState<number>(0);
    return <div>
        <Htag tag='h1'>Header 1</Htag>
        <Htag tag='h2'>Header 2</Htag>
        <Htag tag='h3'>Header 3</Htag>
        <Htag tag='h2'>Buttons</Htag>
        <div>
            <span>{counter}</span>
            <Button appearance='primary' onClick={() => setCounter(x => x + 1)}>Counter</Button>
        </div>
        <div>
            <Button appearance='ghost' arrow='down'>132232</Button>
            <Button appearance="primary" arrow='right'>132232</Button>
        </div>
        <div>
            <P>Hello, i'm a text M</P>
            <P size='s'>Hello, i'm a text S</P>
            <P size='l'>Hello, i'm a text L</P>
        </div>
        <div>
            <hr/>
            <Tag href='https://google.com'>Google</Tag>
            <Tag color='red'>Red Tag</Tag>
            <Tag size='s' color='green'>Green small tag</Tag>
            <hr/>
        </div>
        <div>
            <Rating rating={4}/>
        </div>
    </div>;
};

export default Home;
