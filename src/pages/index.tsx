import styled from "@emotion/styled";
import JSConfetti from "js-confetti";
import { NextPage } from "next";
import { useEffect, useRef } from "react";

/**
 * https://github.com/loonywizard/js-confetti
 */

const Home: NextPage = () => {
  // const jsConfetti = new JSConfetti()

  const confetti = useRef<JSConfetti | null>(null);

  const popEmoji = () => {
    confetti.current?.addConfetti({
      confettiNumber: 100,

      emojis: ["🇰🇷", "💸", "💵", "💖"],
      emojiSize: 256,

      // or
      // confettiColors: [
      //   '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
      // ],
      // confettiRadius: 10,
    });
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      confetti.current = new JSConfetti();
    }
  }, []);

  return (
    <HomePage>
      <CardImage src="/images/card.svg" onClick={popEmoji} />
    </HomePage>
  );
};

const CardImage = styled.img`
  width: 300px;
  border-radius: 8px;
  box-shadow: 0px 16px 36px rgba(0, 0, 0, 0.05);

  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }
`;

const HomePage = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("/images/gradient.webp");
  background-size: cover;
`;

export default Home;
