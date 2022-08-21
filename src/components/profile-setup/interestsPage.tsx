
export const InterestsPage: React.FC = () => {

    return (
        <div className="w-1/2 mx-auto space-y-6">
            <div className="space-y-6 text-center">
                <div className="text-[24px] font-bold">
                    Find your dev community
                </div>
                <div>
                    start with your 5 favorite programming languages, frameworks, tools or anything what you use and love.
                </div>
            </div>
            <div className="text-center space-y-4">
                <div>
                    <input className="bg-cultured-dark fontb-bold px-3 py-4 w-full outline-none rounded-md" type="text" placeholder="python, react, linux"/>
                </div>
                <div className="grid grid-cols-4 gap-2">
                    <div className="px-4 py-2 bg-gray-800 text-white font-bold shadow-md rounded">c++</div>
                    <div className="px-4 py-2 bg-gray-800 text-white font-bold shadow-md rounded">solidity</div>
                    <div className="px-4 py-2 bg-gray-800 text-white font-bold shadow-md rounded">reactjs</div>
                    <div className="px-4 py-2 bg-gray-800 text-white font-bold shadow-md rounded">javascript</div>
                </div>
            </div>
            <div className="flex justify-end">
                <button className="py-1 w-32 bg-sea-green hover:bg-sea-green-dark shadow-md" >Next</button>
            </div>
        </div>
    );
}