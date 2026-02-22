import { useState, useEffect, useRef, useCallback } from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#&*";

interface TypewriterOptions {
  words: string[];
  holdDuration?: (word: string) => number;
}

export function useTypewriter({ words, holdDuration }: TypewriterOptions) {
  const [chars, setChars] = useState<string[]>([]);
  const [cursorVisible, setCursorVisible] = useState(false);
  const wordIdx = useRef(0);
  const cycling = useRef(false);
  const started = useRef(false);
  const cooldown = useRef(false);
  const intervals = useRef<ReturnType<typeof setInterval>[]>([]);

  const getHold = holdDuration ?? ((w: string) => (w === "BOTTO" ? 5000 : 2500));

  const cleanup = useCallback(() => {
    intervals.current.forEach(clearInterval);
    intervals.current = [];
  }, []);

  const decode = useCallback(
    (word: string, onDone?: () => void) => {
      cleanup();
      const length = word.length;
      const newChars = Array.from({ length }, () => "_");
      setChars([...newChars]);

      let done = 0;
      for (let i = 0; i < length; i++) {
        let iter = 0;
        const maxIter = 5 + Math.random() * 3;
        const iv = setInterval(
          () => {
            if (iter >= maxIter) {
              newChars[i] = word[i] ?? "";
              setChars([...newChars]);
              clearInterval(iv);
              done++;
              if (done === length) onDone?.();
              return;
            }
            newChars[i] = GLYPHS[Math.floor(Math.random() * GLYPHS.length)]!;
            setChars([...newChars]);
            iter++;
          },
          120 + i * 40,
        );
        intervals.current.push(iv);
      }
    },
    [cleanup],
  );

  const cycleWord = useCallback(() => {
    if (cycling.current) return;
    cycling.current = true;
    const word = words[wordIdx.current]!;

    decode(word, () => {
      setTimeout(() => {
        wordIdx.current = (wordIdx.current + 1) % words.length;
        cycling.current = false;
        cycleWord();
      }, getHold(word));
    });
  }, [words, decode, getHold]);

  const start = useCallback(() => {
    if (started.current) return;
    started.current = true;
    setCursorVisible(true);
    cycleWord();
  }, [cycleWord]);

  const rescramble = useCallback(() => {
    if (cooldown.current) return;
    cooldown.current = true;
    const current = chars.join("");
    decode(current);
    setTimeout(() => {
      cooldown.current = false;
    }, 2000);
  }, [chars, decode]);

  useEffect(() => {
    return cleanup;
  }, [cleanup]);

  return { chars, cursorVisible, start, rescramble };
}
