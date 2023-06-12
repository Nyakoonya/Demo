/* src\views\home\index.tsx */
import { Button } from "antd";
import { Link } from "react-router-dom";
function home() {
    return (
        <div className="home">
            我是homePage
            <Button type="primary">
                <Link to="/about">前往aboutPage</Link>
            </Button>
        </div>
    );
}

export default home;