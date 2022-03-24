import Jumbotron from "../components/Jumbotron";
import jumboData from "../fixtures/jumbo.json";
export default function Jumbo() {
    return <Jumbotron.Container>
      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.Image src={item.image} alt={`${item.title}`} />
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>;
  }