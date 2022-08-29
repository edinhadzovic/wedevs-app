import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStory } from "../store/features/activeStorySlice";
import store, { RootState } from "../store/store";
import { getStory } from "../store/thunks";
import { getSlugId } from "../utils/indes";

export const useActiveStory = (slug: string) => {
    const dispatch = useDispatch();
    const {stories} = useSelector((state: RootState) => state.stories);
    const {story, fetching} = useSelector((state: RootState) => state.activeStory);
    const activeStory = stories.find(story => story.slug === slug);

    useEffect(() => {
        dispatch(setStory(activeStory));
        const timeoutID = setTimeout(() => {
            store.dispatch(getStory(getSlugId(slug)!))
        }, 500)
        return () => clearTimeout(timeoutID)
    }, [activeStory, dispatch, slug]);

    return [story, fetching] as const;
}