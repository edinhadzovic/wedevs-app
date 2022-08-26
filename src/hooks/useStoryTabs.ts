import { useState } from "react";

type StoryTabs = "edit" | "preview";


export const useStoryTabs = () => {
    const [activeTab, setActiveTab] = useState<StoryTabs>("edit");

    const handleTabChange = (tab: StoryTabs) => {
        setActiveTab(tab);
    }

    return {activeTab, handleTabChange} as const;
}