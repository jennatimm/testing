import LikeButton from './like-button';
function Header({title}) {
    return (<h1>{title}</h1>)
}
export default function HomePage() {
    const names = ['J T', 'T N', 'D W'];
    return (<div>
        <Header title="Develop. Preview. Ship"/>
        <ul> 
            {names.map((name) => <li>{name}</li>)} 
        </ul>
        <LikeButton/>
    </div>);
}