import { Link, Outlet, useMatch } from "react-router-dom";
import { Avatar, Button, PageLink } from "../components/primitives";
import { useUser } from "../hooks";

interface ILayoutProps {}

export const Layout: React.FC<ILayoutProps> = (props) => {
    const isLogin = useMatch({path: "/", end: true});
    const isWelcome = useMatch({path: "/welcome", end: true});
    const {user} = useUser();


    if (isLogin || isWelcome) {
        return (<Outlet />)
    }

    return (
        <div>
            <div className="flex flex-row container mx-auto items-center px-2 py-4 mb-8">
                <div className="basis-1/4 flex px-2 space-x-4 items-center">
                    <div>
                        <Avatar source={user.avatar} size="small" />
                    </div>
                    <div>
                        <span className="font-bold">@{user.username}</span>
                    </div>
                </div>
                <div className="basis-2/4">
                    <div className="space-x-4 mx-auto flex items-center">
                        <div className="basis-3/4">
                            <input type="text" className="bg-gray-100 w-full px-2 py-3 rounded outline-none" placeholder="search..."/>
                        </div>
                        <div className="basis-1/4">
                            <Link to="/new-post">
                                <Button>Create Post</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="basis-1/4 justify-end flex">
                    <Button type="dark">Logout</Button>                
                </div>
            </div>
            <div className="container mx-auto flex flex-row" >
                <aside className="basis-1/4">
                    <nav className="flex flex-col space-y-4">
                        <PageLink to="/home">home</PageLink>
                        <PageLink to="/discover">discover</PageLink>
                        <PageLink to="/jobs">jobs</PageLink>
                    </nav>
                </aside>
                <div className="basis-3/4">
                    <Outlet />
                </div>
                <div className="basis-1/4">
                    {
                        // should be offer user discover pages.
                    }
                </div>
            </div>
        </div>
    );
}