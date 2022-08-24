import { FollowCard } from "../cards";

interface IFollowPageProps {
    onNextClick: () => void;
}

export const FollowPage: React.FC<IFollowPageProps> = (props) => {
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
                <FollowCard />
                <FollowCard />
                <FollowCard />
                <FollowCard />
                <FollowCard />
                <FollowCard />
                <FollowCard />
                <FollowCard />
            </div>
            <div className="flex justify-end">
                <button onClick={onNextClick} className="py-1 w-32 bg-sea-green hover:bg-sea-green-dark shadow-md" >Next</button>
            </div>
        </div>
    );
}