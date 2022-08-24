import { useFollowSuggestion } from "../../hooks";
import { FollowCard } from "../cards";

interface IFollowPageProps {
    onNextClick: () => void;
}

export const FollowPage: React.FC<IFollowPageProps> = (props) => {
    const [users, fetching] = useFollowSuggestion();
    const {onNextClick} = props;

    return (
        <div className="w-full sm:w-3/4 mx-auto space-y-6 mb-10">
            <div className="space-y-6 text-center">
                <div className="text-[24px] font-bold">
                    Maybe you find those developers interesting to follow
                </div>
                <div>
                    They can have great inside, expirience or are very kind to help other developers with questions.
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {fetching === "pending" && <div className="text-center">loading...</div>}
                {fetching === "success" && users.map(user => <FollowCard key={user.id} user={user} />)}
                {fetching === "success" && users.length === 0 && <div className="text-center">no users found</div>}
            </div>
            <div className="flex justify-end">
                <button onClick={onNextClick} className="py-1 w-32 bg-sea-green hover:bg-sea-green-dark shadow-md" >Next</button>
            </div>
        </div>
    );
}