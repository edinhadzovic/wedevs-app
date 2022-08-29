import { useEffect } from "react";
import { useSelector } from "react-redux";
import { StoryCard } from "../components/cards";
import { RequreAuthRoute } from "../routes";
import store, { RootState } from "../store/store";
import { getStories } from "../store/thunks";


const Content = () => {
    const {stories} = useSelector((state: RootState) => state.stories);

    useEffect(() => {
        store.dispatch(getStories());
    }, [])

    return (
        <div>
            <div className="w-full px-4 sm:w-3/4 space-y-5">
                {stories.map((story, id) => (
                    <StoryCard key={id} story={story} />
                ))}
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