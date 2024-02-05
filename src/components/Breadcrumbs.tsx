

import { useMatches } from "react-router-dom";
import { styles } from "../style";



const IconBreadcrumb = <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-math-greater stroke-blue-400 mx-2" width={15} height={15} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M5 18l14 -6l-14 -6" />
</svg>

export const Breadcrumbs = () => {


    const matches = useMatches();
    const crumbs = matches
        // first get rid of any matches that don't have handle and crumb
        .filter((match) => Boolean(match.handle?.crumb))
        // now map them into an array of elements, passing the loader
        // data to each one
        .map((match) => match.handle.crumb(match.data));

    return (
        <nav className={`${styles.paddingX} text-xs md:text-sm font-poppins`}>
            {/*  {crumbs.map((crumb, index) => (
                <li key={index}>{crumb}</li>
            ))} */}
            {crumbs.map((crumb, index) => (
                <span key={index} className="inline-flex items-center">{crumb} {index !== crumbs.length - 1 && IconBreadcrumb}</span>
            ))}
        </nav>
    );
}
