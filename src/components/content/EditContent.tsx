import { ICreateStory } from "../../interface";
import { changeTitle, changeContentRaw } from "../../store/features";
import store from "../../store/store";

interface IEditContentProps {
    story: ICreateStory;
}

export const EditContent: React.FC<IEditContentProps> = ({story}) => {
    
    return (
        <div>
            <div>
                <textarea
                    value={story.title}
                    onChange={(e) => store.dispatch(changeTitle(e.target.value))}
                    placeholder="Title"
                    className="p-2 text-3xl outline-none font-bold w-full"
                />
            </div>
            <div>
                <textarea
                    value={story.contentRaw}
                    placeholder="Content" 
                    className="p-2 outline-none w-full h-screen" 
                    onChange={(e) => store.dispatch(changeContentRaw(e.target.value))}
                />
            </div>
        </div>
    );
}