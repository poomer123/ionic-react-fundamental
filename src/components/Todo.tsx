import React from "react";
import { IonItem, IonLabel, IonCheckbox, IonBadge } from "@ionic/react";

type TodoProps = {
  id: number;
  name: string;
  deadline?: number;
};

const Todo: React.FC<TodoProps> = ({ id, name, deadline }) => (
  <IonItem>
    <IonCheckbox slot='start' />
    <IonLabel>{name}</IonLabel>{" "}
    <IonBadge color='success' slot='end'>
      {deadline} Days
    </IonBadge>
  </IonItem>
);

export default Todo;
