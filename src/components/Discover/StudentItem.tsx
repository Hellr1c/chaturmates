import {
  IonButton,
  IonCol,
  IonGrid,
  IonIcon,
  IonItem,
  IonLabel,
  IonRow,
  IonText,
  useIonRouter,
} from "@ionic/react";
import { personCircleOutline } from "ionicons/icons";
import { ComponentProps } from "react";
import "./StudentItem.css";
import ItemListButton from "../ItemListButton";
import S from "string";
import { useAtom } from "jotai";

type IonItemProps = ComponentProps<typeof IonItem>;

export default function KlasmeytItem(
  props: IonItemProps & {
    studentId: number;
    slug: string;
    size: string;
    icon: string;
    studentName: string;
    studentType: string;
    buttonLabel: string;
  }
) {
  const rt = useIonRouter();
  function handleView() {
    rt.push("/student/" + props.studentId, "forward");
  }

  return (
    <IonItem onClick={handleView} {...props}>
      <IonIcon
        className="klasmeytItemIcon"
        slot="start"
        icon={props.icon}
      ></IonIcon>
      <IonRow className="ion-align-items-center ml-[-5px]">
        <IonCol>
          <IonText className="studentItemName truncate font-poppins font-semibold">
            {props.studentName}
          </IonText>
          <br/>
          <IonText className="studentType">
            {S(props.studentType).capitalize().s}
          </IonText>
        </IonCol>
      </IonRow>
      <IonButton slot="end"  className="rounded-3xl">
        <IonText className="p-2">
          <span className=" font-poppins font-medium text-base">{props.buttonLabel}</span>
        </IonText>
      </IonButton>
    </IonItem>
  );
}

KlasmeytItem.defaultProps = {
  lines: "none",
  icon: personCircleOutline,
  size: "large",
  slug: "johnna_doe",
  studentName: "Johnna Doe",
  studentType: "Regular",
  buttonLabel: "Message",
};
