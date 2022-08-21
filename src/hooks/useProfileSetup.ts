import { useState } from "react"

export enum ProfileSetupStep {
    Bio,
    Interests,
    Follow,
    Finish
}

export const useProfileSetup = () => {
    const [page, setPage] = useState<ProfileSetupStep>(ProfileSetupStep.Bio);

    const changePage = (step: ProfileSetupStep) => {
        setPage(step);
    }

    return [page, changePage] as const;
}