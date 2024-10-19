import "./App.css";
import EventCard from "./EventCard.js";
import Message from "./Message.js";
import CurrentTime from "./components";
import Heading from "./components.js";

function App() {
    return (
        <div className="App">
            <h1>Hello my friend!!!</h1>
            <Heading />
            <CurrentTime />
            <section>
                <EventCard
                    title="Концерт группы Крутая группа'"
                    date="22 октября 2024, 19:00"
                    location="Москва, Крокус Сити Холл"
                />
                <EventCard
                    title="Выставка 'Мир Динозавров'"
                    date="5 ноября 2024, 10:00"
                    location="Санкт-Петербург, Экспофорум"
                />
                <EventCard
                    title="Фестиваль еды 'Вкусная осень'"
                    date="12 ноября 2024, 12:00"
                    location="Нижний Новгород, Парк культуры и отдыха"
                />
            </section>
            <Message />
        </div>
    );
}

export default App;
