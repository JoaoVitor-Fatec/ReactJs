const person = {
    name: 'Gregorio Y. Zara',
    theme:{
        backgroundColor: 'black',
        color: 'pink'
    }
};

export default function TodoList(){
    return (
        <div style={person.theme}>
            <h1>{person.name}'s Todos</h1>
            <img
                className="avatar"
                src="https://i.imgur.com/7vQD0fPs.jpg"
                alt="Gregorio Y. Zara"
            />
            <ul>
                <li>Improve the video</li>
                <li>Prepare aeronaltic</li>
                <li>Work on the alchool</li>
            </ul>
        </div>
    );
}