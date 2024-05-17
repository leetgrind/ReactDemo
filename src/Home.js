import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            This is home page component on github pages
            <Link to={"/contact"}>Contact Link</Link>
        </div>
    );
}

export default Home;