import React from "react";
import styled from "styled-components";
import { Body } from "./body";
import { Button } from "./button";
import { Card } from "./card";
import { Text } from "./text";
import { Title } from "./title";

export const CardStack = () => {
  return (
    <SDiv>
      <Card>
        <Text variant="title">Panda life</Text>
        <Body>It is hard being panda and resting all day</Body>
        <Button>Learn about Panda</Button>
      </Card>
      <Card>
        <Title>Photos</Title>
        <Body>See what panda is up to</Body>
        <Button>Open</Button>
      </Card>
      <Card>
        <Title>Pandaphone</Title>
        <Body>
          This revolutionary piece of technology was invented by the bamboo
          loving species.
        </Body>
        <Button>See more</Button>
      </Card>
      <Card>
        <Title>Pandovinky</Title>
        <Body>
          Get fresh ideas for Pandovinky to your inbox every Friday so you are
          ready for the weekend!
        </Body>
        <Button>Subscribe to Pandovinky</Button>
      </Card>
    </SDiv>
  );
};

const SDiv = styled.div`
  display: grid;
  grid-auto-columns: 240px;
  grid-auto-rows: 80px;
  gap: 24px;
`;
