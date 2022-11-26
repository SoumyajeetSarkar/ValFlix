import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';
import ReactPlayer from 'react-player';
import {HiX} from "react-icons/hi";
import { Container, Button, Overlay, Inner, Close, HeaderButton } from './styles/player';

export const PlayerContext = createContext();

export default function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.Video = function PlayerVideo({ src, ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay onClick={() => setShowPlayer(false)} data-testid="player">
          <Close><HiX color="white" size={100}/></Close>
          <Inner>
            <ReactPlayer url={src} controls={true}/>
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};

Player.Button = function PlayerButton({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return (
    <Button onClick={() => setShowPlayer((showPlayer) => !showPlayer)} {...restProps}>
      Play
    </Button>
  );
};

Player.HeaderButton = function PlayerHeaderButton({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return (
    <HeaderButton onClick={() => setShowPlayer((showPlayer) => !showPlayer)} {...restProps}>
      Play
    </HeaderButton>
  );
};
