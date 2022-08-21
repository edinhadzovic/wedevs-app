import { RequreAuthRoute } from "../routes";


const Content = () => {

    return (
        <div className="h-screen w-screen justify-center items-center">
            <div>
                The linkedin for developers. <span className="font-bold">Just better!</span>
            </div>
            <div></div>
        </div>
    );
}

export const Home = () => (
    <RequreAuthRoute>
        <Content />
    </RequreAuthRoute>
)