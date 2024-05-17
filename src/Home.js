import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            This is home page component
            <Link to={"/contact"}>Contact Link</Link>
        </div>
    );
}

export default Home;