import { useParams } from "react-router-dom";
import { PostHeader } from "../components/post";
import { useActiveStory } from "../hooks";

interface IPostProps {}

const getSlugId = (slug: string) => {
    const id = slug!.split("-").pop();
    return id;
}

export const Post: React.FC<IPostProps> = () => {
    const {slug} = useParams();
    const [story, loading] = useActiveStory(getSlugId(slug!)!);

   if (loading === "pending") {
         return <div>loadiong...</div>
   }

    return (
        <div>
            <div className="mb-4">
                <PostHeader story={story!} />
            </div>
            <article>
                <div className="my-8">
                    <h1 className="text-3xl font-bold w-full mb-5">{story!.title}</h1>
                </div>
                <div dangerouslySetInnerHTML={{__html: story!.contentHTML}}>
                </div>
            </article>
            
        </div>
    );
}