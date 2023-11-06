import {
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Discover.css";
import BtnSearch from "../components/Discover/BtnSearch";
import useSession from "../hooks/auth/useSession";
import StudentCard from "../components/Discover/StudentCard";
import GroupCard from "../components/Discover/GroupCard";

function Discover() {
  const { session, nickname } = useSession();

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonText slot="start" className="pageTitle">
              Welcome, {nickname}
            </IonText>
            <IonButtons slot="end">
              <BtnSearch />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <StudentCard/>
        <GroupCard/>
        {/* <ExploreContainer name="Discover page" /> */}
      </IonContent>
    </IonPage>
  );
}

export default Discover;
