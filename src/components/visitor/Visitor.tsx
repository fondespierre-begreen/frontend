import { IonButton } from "@ionic/react"


/**
 * @returns L'app du visiteur.
 */
const Visitor: React.FC = () => {
    return (
        <div>
            <h2>Visitor</h2>
            <IonButton href="/">back</IonButton>
        </div>
    );
};

export default Visitor;