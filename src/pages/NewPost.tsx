import { RequreAuthRoute } from "../routes";


const Content = () => {

    return (
        <div>
            <div>
                <input type="text" placeholder="Title" className="p-2 text-3xl outline-none font-bold" />
            </div>
            <div>
                <textarea placeholder="Content" className="p-2 text-xl outline-none w-full" />
            </div>
            <div></div>
        </div>
    );
}

export const NewPost = () => (
    <RequreAuthRoute>
        <Content />
    </RequreAuthRoute>
)