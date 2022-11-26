import styled from "styled-components/macro";

export const Container = styled.div``;

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
`;

export const Inner = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 900px;
  margin: auto;
  justify-content: center;
  video {
    height: 100%;
    width: 100%;
  }
`;

export const Close = styled.button`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  opacity: 0.3;
  text-color: white;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

export const Button = styled.button`
  background-color: #e50914;
  border-color: #ff0a16;
  width: 115px;
  height: 45px;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  font-size: 18px;
  height: 45px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0;
  &:hover {
    transform: scale(1.05);
    background-color: #ff0a16;
  }
`;

export const HeaderButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  border-width: 0;
  padding: 10px 20px;
  border-radius: 5px;
  max-width: 130px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: #ff1e1e;
    color: white;
  }
`;


