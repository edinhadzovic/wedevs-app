import { RequreAuthRoute } from "../routes";


const Content = () => {

    return (
        <div>
            <div>
                Discover oppertunities.
            </div>
            <div></div>
        </div>
    );
}

export const Jobs = () => (
    <RequreAuthRoute>
        <Content />
    </RequreAuthRoute>
)