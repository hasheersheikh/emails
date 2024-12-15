import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

export const WelcomeEmail = () => (
  <Html>
    <Head />
    <Preview>Welcome to my email newsletter,</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={paragraph}>Hello,</Text>
        <Text style={paragraph}>
          Welcome to my react email project, Thank you for exploring our website
          and joining our digital journey! We&apos;re thrilled to have you here.
        </Text>
        <Text style={paragraph}>
          Regards,
          <br />
          Hashir Sheikh
          <br />
          hasheersheikh@gmail.com
        </Text>
      </Container>
    </Body>
  </Html>
);

export default WelcomeEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};
