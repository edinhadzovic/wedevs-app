
import { useSelector } from "react-redux";
import { EditContent, PreviewContent } from "../components/content";
import { Button, Tab } from "../components/primitives";
import { useStoryTabs } from "../hooks";
import { RequreAuthRoute } from "../routes";
import store, { RootState } from "../store/store";
import { publishStory, draftStory } from "../store/thunks";


const Content = () => {
    const {story} = useSelector((state: RootState) => state.story);
    const {activeTab, handleTabChange} = useStoryTabs();

    return (
        <div>
            <div className="flex mb-5 px-2 w-full">
                <div className="space-x-4">
                    <Tab active={activeTab === "edit"} onClick={() => handleTabChange("edit")} >Edit</Tab>
                    <Tab active={activeTab === "preview"} onClick={() => handleTabChange("preview")} >Preview</Tab>
                </div>
                <div className="flex space-x-5 sm:ml-auto text-center fixed sm:relative bottom-5 sm:bottom-0 justify-center w-[90%] sm:w-auto">
                    <Button onClick={() => store.dispatch(publishStory(story))} version="secondary">Publish</Button>
                    <Button onClick={() => store.dispatch(draftStory(story))}>Save Draft</Button>
                </div>
            </div>
            <div className="">
                {activeTab === "edit" && <EditContent story={story} />}
                {activeTab === "preview" && <PreviewContent story={story} />}
            </div>
            
        </div>
    );
}

export const NewPost = () => (
    <RequreAuthRoute>
        <Content />
    </RequreAuthRoute>
)