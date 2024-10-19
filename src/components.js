function Heading() {
    return ( <h2>ПРИВЕТ, React!</h2> );
}


function CurrentTime() {
    const currentTime = new Date().toLocaleTimeString();
    return ( 
        <h2>Текущее время: {currentTime}</h2>  // Вывод текущего времени в формате "HH:MM:SS"
    );
}

export default CurrentTime; Heading; 
