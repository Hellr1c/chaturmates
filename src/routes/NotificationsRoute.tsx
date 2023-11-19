import { IonRouterOutlet } from "@ionic/react";
import { Route } from "react-router";
import Notifications from "../pages/Notifications";

export default function NotificationsRoute() {
  return (
    <IonRouterOutlet>
      <Route exact path="/notifications" render={() => <Notifications />} />
    </IonRouterOutlet>
  );
}
