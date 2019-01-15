import React from 'react';
import { Container, Header, Content, Body, Button, Text } from 'native-base';

export interface Props {
  notificationSent: boolean;
  sendNotification(): void;
}

export interface State {}

export class MainScreen extends React.Component<Props, State> {
  sendNotification() {
    this.props.sendNotification();
  }

  render() {
    return (
      <Container>
        <Header/>
        <Content padder>
          <Body>
            <Button success={ this.props.notificationSent } onPress={() => this.sendNotification()}>
              <Text>Notification</Text>
            </Button>
          </Body>
        </Content>
      </Container>
    );
  }
}
