import { styles } from "../style";

export const Footer = () => (
  <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col border-t b-2`}>
    <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
      Copyright &copy; {new Date().getFullYear()} Angel Larios
    </p>
  </footer>
);


