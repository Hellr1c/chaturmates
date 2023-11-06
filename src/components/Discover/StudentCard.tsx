import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonAvatar, IonRow, IonCol } from "@ionic/react";
import { ComponentProps } from "react"
import "./StudentCard.css";

// TODO: design StudentCard
type StudentCardProps = ComponentProps<typeof IonCard>;

export default function StudentCard(props: StudentCardProps & {

}) {
  return ( 
    <IonCard> {/* ung problem is ung icon and text di nagtatabi */}
      <IonRow>
        <IonCol>
        <IonAvatar>
        <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
      </IonAvatar>
        </IonCol > {/*gawing flex*/}
        <IonCol>
        <IonCardHeader>
        <IonCardTitle>Card Title</IonCardTitle>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
      </IonCol>
      </IonRow>
    </IonCard>
  )
}
