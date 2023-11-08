import { AnimatedLetter } from "../AnimatedLetter";
import { animated, useTrail } from "react-spring";
import styles from "./AnimatedWord.module.css";

interface AnimatedWordProps {
  word: string;
}

/**
 * Creates a collection of AnimatedLetters from a string
 * @param word the word to be animated
 */
export const AnimatedWord = ({ word, ...props }: AnimatedWordProps) => {
  const characters = word.split("");

  const trails = useTrail(characters.length, {
    from: { opacity: 0, transform: "translateX(50%) scale(1.5)" },
    to: { opacity: 1, transform: "translateX(0) scale(1)" },
  });

  return (
    <div className={styles.word} {...props}>
      {trails.map((style, i) => (
        <animated.div style={style} key={i}>
          <AnimatedLetter letter={characters[i]} />
        </animated.div>
      ))}
    </div>
  );
};
