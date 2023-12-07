import { IonRow, IonCol, IonText } from "@ionic/react";
import { Ref, useEffect, useRef, useState } from "react";
import SignupModal from "./SignupModal";

export default function DontHaveAnAccount(props: { handleClick: () => void }) {
  return (
    <IonRow>
      <IonCol size="8">Don't have an account?</IonCol>
      <IonCol size="4" className="ion-text-end" onClick={props.handleClick}>
        <IonText color="primary" className="cursor-pointer font-bold">
          Sign up
        </IonText>
      </IonCol>
    </IonRow>
  );
}
