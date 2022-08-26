import { IStory } from "../../interface";

interface IPreviewContentProps {
    story: IStory;
}

export const PreviewContent: React.FC<IPreviewContentProps> = ({story}) => {
    
    return (
        <article className=" mb-80">
            <h1 className="text-3xl font-bold w-full mb-5">{story.title}</h1>
            <div className="space-y-5" dangerouslySetInnerHTML={{__html: story.contentHtml}}></div>
        </article>
    );
}