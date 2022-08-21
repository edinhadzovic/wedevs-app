import { Button, Avatar } from "../primitives"

interface IFollowCard {}

export const FollowCard: React.FC<IFollowCard> = (props) => {

    return (
        <div className="border-2 border-black bg-cultured-light shadow-md p-5 space-y-4 w-full rounded-xl mx-auto">
            <div>
                <div className="flex flex-row items-center space-x-2">
                    <Avatar size="small" source="https://avatars.githubusercontent.com/u/22931117?v=4" /> <span className="font-bold"> @edinhadzovic </span>
                </div>
            </div>
            <div>
                <p>
                    Co-Founder of wedevs.io, nodejs, javascript, typescript, react, rust and python.
                </p>
            </div>
            <div className="flex justify-end">
                <Button>follow</Button>
            </div>
        </div>
    )
}