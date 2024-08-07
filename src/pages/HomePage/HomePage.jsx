import PageTitle from "../../components/PageTitle/PageTitle";
import css from "./HomePage.module.css";
import backgroundImage from "../../photo/hero.jpg";

export default function HomePage() {
  return (
    <div className={css.pageContainer}>
      <img
        src={backgroundImage}
        alt="Background"
        className={css.backgroundImage}
      />
      <PageTitle>Welcome to Phone Book</PageTitle>
    </div>
  );
}
