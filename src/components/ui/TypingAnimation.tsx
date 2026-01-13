import { useEffect, useState } from "react";

interface TypingAnimationProps {
  phrases: string[];
  speed?: number;
  delayBetweenPhrases?: number;
  cursorClassName?: string;
  textClassName?: string;
  shouldStart?: boolean;
}

export default function TypingAnimation({
  phrases,
  speed = 100,
  delayBetweenPhrases = 2000,
  cursorClassName = "animate-pulse",
  textClassName = "text-4xl md:text-5xl",
  shouldStart = true,
}: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!shouldStart) return;

    const currentPhrase = phrases[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (isTyping) {
      // Typing phase
      if (displayText.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, speed);
      } else {
        // Finished typing, wait before erasing
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, delayBetweenPhrases);
      }
    } else {
      // Erasing phase
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, displayText.length - 1));
        }, speed / 2);
      } else {
        // Move to next phrase
        timeout = setTimeout(() => {
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
          setIsTyping(true);
        }, 0);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    displayText,
    phraseIndex,
    isTyping,
    speed,
    delayBetweenPhrases,
    phrases,
    shouldStart,
  ]);

  return (
    <span className={textClassName}>
      {displayText}
      <span
        className={`${cursorClassName} ml-2 inline-block w-1 h-8 md:h-10 bg-primary`}
      ></span>
    </span>
  );
}
