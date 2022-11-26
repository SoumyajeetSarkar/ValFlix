import { FaqsContainer } from "../container-functions/faqs";
import { FooterContainer } from "../container-functions/footer";
import { HeaderContainer } from "../container-functions/header";
import Feature from "../components/feature";
import OptForm from "../components/opt-form"
import Jumbo from "../container-functions/jumbo";

export default function Home() {
  return (
    <>
      <HeaderContainer buttonName="Sign In" route="/signin">
        <Feature>
          <Feature.Title>
            Unlimited Clips from Esports, Streams and more.
          </Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time.
          </Feature.SubTitle>
          <OptForm>
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
             <OptForm.Text>
              Ready to watch? Click to create an account and jump into the magical universe of valorant.
            </OptForm.Text> 
          </OptForm>
        </Feature>
      </HeaderContainer>
      <Jumbo />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
