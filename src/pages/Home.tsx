import { StoryCard } from "../components/cards";
import { RequreAuthRoute } from "../routes";


const Content = () => {

    return (
        <div>
            <div className="w-3/4 mx-auto space-y-24">
                <StoryCard />
                <StoryCard />
                <StoryCard />
                <StoryCard />
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