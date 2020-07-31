import React from "react";
import { Description } from "../../../../components/Description/Description";
import { Card } from "../../../../components/Card/Card";

export const CardPage = () => {
  return (
    <div className="content-wrapper">
      <Description
        title="UI CARD"
        text="Реализация карточек с использование паттерна 'Compound components'"
      />
      <div>
        <Card>
          <Card.Title>Заголовок</Card.Title>
          <Card.Body>
            Ex est consequat ullamco nostrud aute velit fugiat veniam Lorem
            dolore. Sint excepteur irure cillum quis laboris anim velit et anim
            ullamco. Eiusmod do Lorem excepteur consequat magna officia ullamco
            labore.
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
