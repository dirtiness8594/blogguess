import Image from "next/image";
import styles from "./page.module.css";
import Menu from "@/components/Menu";
import Main from "@/components/Main";
{/* <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
         */}


export default function Home() {
  return (
     <div className="layout">
       
   
         <Menu />
         <Main />
       </div>
  );
}
