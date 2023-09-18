const person = {
    name: 'Piyush Singanjude',
    theme: {
        bgColor: 'black',
        color: 'red'
    }
};

export default function TodoList() {
    return(
        <div style = {person.theme}>
            <h1>{person.name}Todos</h1>
            <img className='avatar'
            src='https://i.imgur.com/7vQD0fPs.jpg'
            alt='Piyush Singanjude'
            />
            <ul>
                <li>Workout</li>
                <li>study</li>
            </ul>
        </div>
    )