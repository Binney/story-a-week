import { Link } from "remix";

export default function Header() {
    return (
        <div className="header-row">
            <div className="container">
                <div className="header-nav">
                    <Link to="/">Binney's story-a-week</Link>
                    <Link to="/stories">All stories</Link>
                </div>
            </div>
        </div>
    )
}
