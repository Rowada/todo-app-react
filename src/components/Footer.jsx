// @ts-nocheck

export const Footer = () => {
  return (
    <footer className="w-full m-auto flex flex-col items-center justify-center gap-5 my-8 sm:max-w-550 lg:max-w-750">
      <p className="text-secondary text-sm md:text-base">
        Drag and drop to reorder list
      </p>

      <nav className="text-xs text-text">
        <ul className="flex gap-2">
          <li>
            Challenge by{" "}
            <a
              className="text-primary underline decoration-solid"
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              rel="noopener noreferrer"
            >
              Frontend Mentor.
            </a>
          </li>
          <li>
            Coded by{" "}
            <a
              className="text-primary underline decoration-solid"
              href="https://www.frontendmentor.io/profile/Rowada"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rowada.
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
