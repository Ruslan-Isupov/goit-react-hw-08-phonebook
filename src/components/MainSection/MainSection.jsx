import css from "./MainSection.module.css"
export const MainSection = () => {
  return (
    <div className={css.mainSection}>
          <h1 className={css.mainHeading}>PhoneBooks</h1>
          <h2 className={css.sectionHeading}>Try It</h2>
          <p className={css.mainParagraph}>Useful and simple app for you and your friends...</p>
    </div>
  );
};
