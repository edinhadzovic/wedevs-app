
export const FinishPage: React.FC = () => {

    return (
        <div className="w-1/2 mx-auto space-y-6">
            <div className="space-y-6 text-center">
                <div className="text-[24px] font-bold">
                    Thank you for joining, please read the rules and contribute standards. 
                </div>
            </div>
            <div className="flex justify-end">
                <button className="py-1 w-32 bg-sea-green hover:bg-sea-green-dark shadow-md" >done</button>
            </div>
        </div>
    );
}