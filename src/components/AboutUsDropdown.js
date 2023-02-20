import { useState } from "react";
import Link from "next/link";
import aboutUsItems from "./aboutUsItems";
import styles from "./AboutUsDropdown.module.css";

function AboutUsDropdown() {
  const [dropdown, setDropdown] = useState(false);


  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <ul
      className={`${styles.dropdownMenu} ${
        dropdown && styles.dropdownMenuActive
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {aboutUsItems.map((item) => (
        <li key={item.id}>
          <Link href={item.path}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default AboutUsDropdown;
