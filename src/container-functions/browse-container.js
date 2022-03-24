import { useContext, useState, useEffect } from "react";
import { FirebaseContext } from "../context/firebase-context";
import { SelectProfileContainer } from "./profile-container";
import Loading from "../components/loading";
import Header from "../components/header";
import * as ROUTES from "../constants/routes";
import logo from "../logo.png";
import Card from "../components/card";
import { FooterContainer } from "./footer";
import Player from "../components/player";
export default function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const { firebase } = useContext(FirebaseContext);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("popular");
  const [searchTerm, setSearchTerm] = useState("");
  const [slideRows, setSlideRows] = useState();
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header src="chamber.png">
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
            <Header.TextLink
              active={category === "popular" ? "true" : "false"}
              onClick={() => setCategory("popular")}
            >
              Popular
            </Header.TextLink>
            <Header.TextLink
              active={category === "tournaments" ? "true" : "false"}
              onClick={() => setCategory("tournaments")}
            >
              Tournaments
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>
                    Sign out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Header.FeatureCallOut>
            Watch Chamber Trailer Now
          </Header.FeatureCallOut>
          <Header.Text>
            Well dressed and well armed, French weapons designer Chamber expels
            aggressors with deadly precision. He leverages his custom arsenal to
            hold the line and pick off enemies from afar, with a contingency
            built for every plan.
          </Header.Text>
          <Player>
            <Player.HeaderButton />
            <Player.Video src="https://www.youtube.com/watch?v=FUoqAn5T4h4" />
          </Player>
        </Header.Feature>
      </Header>

      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image src={`/images/valorant-card.jpg`} />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}/>
          </Card>
        ))}
      </Card.Group>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
