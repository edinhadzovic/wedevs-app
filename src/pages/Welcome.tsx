import { useDispatch } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { BioPage, InterestsPage, FollowPage, FinishPage } from "../components/profile-setup";
import { ProfileSetupStep, useProfileSetup, useUser } from "../hooks";
import { RequreAuthRoute } from "../routes";
import { changeBio } from "../store/features";

const pageClass = (active: boolean) => {
    const className = "p-1 rounded cursor-pointer";

    if (active) {
        return `${className} bg-sea-green hover:bg-sea-green-dark`;
    }

    return `${className} hover:bg-cultured-dark`;
}


const Content = () => {
    const [page, changePage] = useProfileSetup();
    const {user, loading} = useUser();
    const dispatch = useDispatch();
    const location = useLocation();

    if (!user.newUser) {
        return <Navigate to="/home" state={{from: location}} replace={true} />
    }

    if (loading) {
        return <div></div>
    }

    return (
        <div className="flex container mx-auto mt-10">
            <aside className="w-1/6 hidden sm:flex">
                <nav className="space-y-2">
                    <div className={pageClass(page === ProfileSetupStep.Bio)} onClick={() => changePage(ProfileSetupStep.Bio)}>bio</div>
                    <div className={pageClass(page === ProfileSetupStep.Interests)} onClick={() => changePage(ProfileSetupStep.Interests)}>interests</div>
                    <div className={pageClass(page === ProfileSetupStep.Follow)} onClick={() => changePage(ProfileSetupStep.Follow)}>follow</div>
                    <div className={pageClass(page === ProfileSetupStep.Finish)} onClick={() => changePage(ProfileSetupStep.Finish)}>finish</div>
                </nav>
            </aside>
            <div className="w-full max-w-[1000px] mx-8">
                {page === ProfileSetupStep.Bio && <BioPage user={user} onBioChange={(e) => dispatch(changeBio(e.target.value))} onNextClick={() => changePage(ProfileSetupStep.Interests)}/>}
                {page === ProfileSetupStep.Interests && <InterestsPage user={user} onNextClick={() => changePage(ProfileSetupStep.Follow)}/>}
                {page === ProfileSetupStep.Follow && <FollowPage onNextClick={() => changePage(ProfileSetupStep.Finish)}/>}
                {page === ProfileSetupStep.Finish && <FinishPage />}
            </div>
        </div>
    );
}

export const Welcome = () => (
    <RequreAuthRoute>
        <Content />
    </RequreAuthRoute>
)