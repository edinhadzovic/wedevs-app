import { RequreAuthRoute } from "../routes";


const Content = () => {

    return (
        <div>
            <div>
                Discover people and projects.
            </div>
            <div></div>
        </div>
    );
}

export const Discover = () => (
    <RequreAuthRoute>
        <Content />
    </RequreAuthRoute>
)