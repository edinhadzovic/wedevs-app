import { useEffect } from "react";
import { IInterest } from "../../interface";
import { InterestFieldAction, useInterestFieldReducer } from "../../reducer";
import { client } from "../../services";

interface IInterestFieldProps {
    onInterestSelected: (interest: IInterest) => void;
}

export const InterestField: React.FC<IInterestFieldProps> = (props) => {
    const { onInterestSelected } = props;
    const [state, dispatch] = useInterestFieldReducer();
    const { fetching, input, result } = state;

    useEffect(() => {
        if (input.length > 0) {
            dispatch({type: InterestFieldAction.FETCHING, payload: {}});
            client.interests.search(input)
                .then(res => {
                    dispatch({type: InterestFieldAction.RESULT, payload: {result: res.data}});
                })
                .catch(error => {})
        }
    }, [input, dispatch])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => dispatch({type: InterestFieldAction.CHANGE, payload: {input: e.target.value}})

    return (
        <div className="relative">
            <div>
                <input value={input} onChange={handleChange} className="bg-cultured-dark fontb-bold px-3 py-4 w-full outline-none rounded-md font-light" type="text" placeholder="python, react, linux..."/>
            </div>
            {fetching === "success" && (
                <div className="w-full absolute font-bold shadow-md">
                    {result.length > 0 ?
                        <div className="text-left">
                            {result.map(interest => (
                                <div onClick={() => onInterestSelected(interest)} key={interest.id} className="transition p-2 bg-gray-50 hover:bg-sea-green cursor-pointer">{interest.name}</div>
                            ))}
                        </div>
                        :
                        <div className="p-2 bg-gray-50">No results</div>
                    }
                </div>
            )}

        </div>
    );
}