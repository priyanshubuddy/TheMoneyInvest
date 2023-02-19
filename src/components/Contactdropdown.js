import { useState } from "react";
import Link from "next/link";

export default function ContactDropdown({ ContactDropdown }) {
  const [dropdown, setDropdown] = useState(false);

  return (
    <ul
      className={dropdown ? "Contacts-submenu clicked" : "Contacts-submenu"}
      onClick={() => setDropdown(!dropdown)}
    >
      {ContactDropdown.map((item) => {
        return (
          <li key={item.id}>
            <Link href={item.path}>
              <a className={item.cName} onClick={() => setDropdown(false)}>
                {item.title}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
