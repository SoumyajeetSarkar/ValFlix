import { Inner, Container, Pane, SubTitle,Image,Title } from "./styles/jumbotron";

function Jumbotron(props) {
  console.log("hello");
  return <Inner direction={props.direction}>{props.children}</Inner>;
}

export default Jumbotron;

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
  };
  
  Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
    return <Pane {...restProps}>{children}</Pane>;
  };
  
  Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
  };
  
  Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
  };
  
  Jumbotron.Image = function JumbotronImage({ ...restProps }) {
    return <Image {...restProps} />;
  };
