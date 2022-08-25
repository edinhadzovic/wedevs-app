import { IUser } from "../../interface";

interface IBioPageProps {
    user: IUser;
    onBioChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onNextClick: () => void;
}


export const BioPage: React.FC<IBioPageProps> = ({user, onBioChange, onNextClick}) => {

    return (
        <div className="w-full sm:w-1/2 mx-auto space-y-10">
            <div className="space-y-6">
                <div className="text-center">
                    <img className="w-24 h-24 rounded-full inline-block" src={user.avatar} alt="user avatar" />
                </div>
                <div className="text-center mx-auto">
                    <div>
                        Hi, @<span className="font-bold">{user.username}</span>,
                    </div>
                    <div>
                        thank you for joining, you are the #<span className=" font-bold">231</span> memeber that joined our network.
                        Before we go, let us check your bio.
                    </div>
                </div>
            </div>
            <div className="space-y-4">
                <div className="font-bold">
                    <label htmlFor="">Bio</label>
                </div>
                <div>
                    <textarea onChange={onBioChange} className="p-3 h-24 bg-cultured-dark w-full text-xs outline-none" placeholder="about you" value={user.bio} />
                </div>
            </div>
            <div className="flex justify-end">
                <button onClick={onNextClick} className="py-1 w-32 bg-sea-green hover:bg-sea-green-dark shadow-md" >Next</button>
            </div>
        </div>
    );
}