import {BoltIcon, ExclamationTriangleIcon, SunIcon} from "@heroicons/react/24/outline";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
        <h1 className="text-5xl font-bold mb-20">Chat GPT</h1>

        <div className="flex space-x-2 text-center">
            <div>
                <div className="flex flex-col items-center justify-center mb-5">
                    <SunIcon className="h-8 w-8"/>
                    <h2 className="">Exemples</h2>
                </div>

                <div className="space-y-2">
                    <p className="infoText">"Quelle est la couleur du soleil?"</p>
                    <p className="infoText">"Explain something to me"</p>
                    <p className="infoText">"Explain something to me"</p>
                </div>
            </div>

            <div>
                <div className="flex flex-col items-center justify-center mb-5">
                    <BoltIcon className="h-8 w-8"/>
                    <h2 className="">Capacités</h2>
                </div>

                <div className="space-y-2">
                    <p className="infoText">Changer le modèle ChatGPT à utiliser</p>
                    <p className="infoText">Les messages sont enregistrés dans le store firebase</p>
                    <p className="infoText">Notifications Hot toast quand ChatGPT réfléchit</p>
                </div>
            </div>

            <div>
                <div className="flex flex-col items-center justify-center mb-5">
                    <ExclamationTriangleIcon className="h-8 w-8"/>
                    <h2 className="">Limitations</h2>
                </div>

                <div className="space-y-2">
                    <p className="infoText">Peut parfois être complètement à côté de la plaque!</p>
                    <p className="infoText">Peut parfois produire du contenu dangereux biaisé</p>
                    <p className="infoText">Connaissances limitées du monde et des évènements après 2021</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage