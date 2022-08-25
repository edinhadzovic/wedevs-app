interface IPageLoaderProps {}

export const PageLoader: React.FC<IPageLoaderProps> = () => {

    return (
        <div className="w-screen h-screen justify-center items-center flex font-bold flex-col text-[64px]" style={{lineHeight: "32px"}}>
            <div className=" animate-translate-down">We</div>
            <div className="text-sea-green animate-translate-up">Devs</div>
        </div>
    )
}