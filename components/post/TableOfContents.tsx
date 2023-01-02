import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FADE_IN_X } from 'data';
import { useScrollSpy } from 'hooks';
import { StyledLink } from 'components/StyledLink';

export function TableOfContents() {
  const [toc, setToc] = useState([{ id: '', level: 0, text: '' }]);
  const activeSection = useScrollSpy();
  const minLevel =
    toc?.reduce((min, item) => (item.level < min ? item.level : min), 10) ?? 0;

  useEffect(() => {
    const headings = Array.from(
      document.querySelectorAll('.mdx h1, .mdx h2, .mdx h3')
    );

    const headingArr = headings.map((heading) => {
      const id = heading.id;
      const level = +heading.tagName.replace('H', '');
      const text = heading.textContent + '';

      return { id, level, text };
    });

    setToc(headingArr);
  }, []);

  return (
    <motion.div
      className="relative hidden h-full pl-10 lg:block"
      {...FADE_IN_X}
    >
      <div className="sticky top-16 h-screen overflow-auto pb-16">
        <div className="hidden w-full max-w-[300px] overflow-auto pb-4 lg:block">
          <h3 className="mb-8 text-2xl font-bold text-white">
            Table of Contents
          </h3>
          <ul className="flex flex-col gap-5 text-sm text-grey-300">
            {toc?.map(({ id, level, text }) => (
              <li key={id}>
                <StyledLink
                  href={`#${id}`}
                  style={{ marginLeft: (level - minLevel) * 16 }}
                  isActive={activeSection === id}
                >
                  {text}
                </StyledLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
