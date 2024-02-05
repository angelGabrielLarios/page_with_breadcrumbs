import { styles } from "./style.ts";
import { Breadcrumbs, Footer, Navbar } from "./components";
import { Outlet } from "react-router-dom";

export const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    {<Breadcrumbs />}
    <main className={`bg-primary `}>


      {/* <Hero /> */}
      <Outlet />

    </main>


    <Footer />

  </div>
);


