'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const totalChars = text.length;
  let charIndex = 0;

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, wordIdx) => {
        const chars = word.split('').map((char) => {
          const start = charIndex / totalChars;
          const end = start + 1 / totalChars;
          charIndex += 1;
          return { char, range: [start, end] as [number, number] };
        });
        charIndex += 1;

        return (
          <span key={wordIdx} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            {chars.map(({ char, range }, i) => (
              <Character key={i} char={char} progress={scrollYProgress} range={range} />
            ))}
            {wordIdx < words.length - 1 ? ' ' : ''}
          </span>
        );
      })}
    </p>
  );
}

interface CharacterProps {
  char: string;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
  range: [number, number];
}

function Character({ char, progress, range }: CharacterProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      <span style={{ visibility: 'hidden' }}>{char}</span>
      <motion.span style={{ position: 'absolute', left: 0, top: 0, opacity }}>
        {char}
      </motion.span>
    </span>
  );
}
