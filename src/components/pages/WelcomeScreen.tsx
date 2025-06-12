
interface WelcomeScreenProps {
    imgLogo: string;
    title: string;
}

export default function WelcomeScreen (props: WelcomeScreenProps) {
    return (
        <section className=" flex justify-center items-center min-h-screen bg-purple-2">
            <div className="aling-center flex flex-col items-center">
            <img src={props.imgLogo} alt="" className="w-30 pb-4" />
            <h1 className="text-2xl text-white font-bold font-family-franklin ml-2">{props.title}</h1>
    </div>


    </section>
    )
}