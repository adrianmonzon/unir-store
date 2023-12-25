import ChristmasTree from "../../components/ChristmasTree/ChristmasTree";
import "./styles.css"
const Home = () => {
    return (
        <section className="home">
            <h1>WELCOME TO THE UNIR-STORE!</h1>
            <div className="home__tree">
                <div className="home__tree-container">
                    <ChristmasTree />
                </div>
            </div>
        </section>

    )
}

export default Home