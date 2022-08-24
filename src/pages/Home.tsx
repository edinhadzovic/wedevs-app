import { StoryCard } from "../components/cards";
import { RequreAuthRoute } from "../routes";


const Content = () => {

    return (
        <div>
            <div className="w-full px-4 sm:w-3/4 sm:mx-auto space-y-24">
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