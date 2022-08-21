import { Link, Outlet, useMatch } from "react-router-dom";

interface ILayoutProps {}

export const Layout: React.FC<ILayoutProps> = (props) => {
    const isLogin = useMatch({path: "/", end: true});
    const isWelcome = useMatch({path: "/welcome", end: true});

    if (isLogin || isWelcome) {
        return (<Outlet />)
    }
    return (
        <div>
            <div>
                <nav className=" font-bold">
                    <Link to="/home">home</Link>
                    <Link to="/welcome">welcome</Link>
                </nav>
                {
                    // should be the header component
                }
            </div>
            <div>
                <div>
                    {
                        // should be the navigation
                    }
                </div>
                <div className=" container mx-auto">
                    <Outlet />
                </div>
                <div>
                    {
                        // should be offer user discover pages.
                    }
                </div>
            </div>
        </div>
    );
}