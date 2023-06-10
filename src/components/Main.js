function Main(props) {
    console.log('props', props);
    return (
        <main className={props.darkMode ? 'dark': ''}>
        <h1 className="main--title">Fun facts about React</h1>
        <ul className="main--facts">
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo?</li>
        </ul>
    </main>
    )
}

export default Main;