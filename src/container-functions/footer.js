import React from 'react';
import Footer from '../components/footer';

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title><Footer.Link href="https://portfolio.sarkardev.online">Questions? Contact us.</Footer.Link></Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="#">FAQ</Footer.Link>
          <Footer.Link href="#">Investor Relations</Footer.Link>
          <Footer.Link href="#">Ways to Watch</Footer.Link>
          <Footer.Link href="#">Corporate Information</Footer.Link>
          <Footer.Link href="#">Valflix Originals</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Help Center</Footer.Link>
          <Footer.Link href="#">Jobs</Footer.Link>
          <Footer.Link href="#">Terms of Use</Footer.Link>
          <Footer.Link href="#">Contact Us</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Account</Footer.Link>
          <Footer.Link href="#">Redeem gift cards</Footer.Link>
          <Footer.Link href="#">Privacy</Footer.Link>
          <Footer.Link href="#">Speed Test</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Media Center</Footer.Link>
          <Footer.Link href="#">Buy gift cards</Footer.Link>
          <Footer.Link href="#">Cookie Preferences</Footer.Link>
          <Footer.Link href="#">Legal Notices</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text>ValFlix Inc. Pvt.</Footer.Text>
    </Footer>
  );
}