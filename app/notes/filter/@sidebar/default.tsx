import Link from "next/link";
import css from "./SidebarNotes.module.css"
import { Category } from "@/types/note";


const categories: Category[] = ['Todo', 'Work', 'Personal', 'Meeting', 'Shopping'];


const SidebarNotes = ()=>{

    return (  
    <div className={css.menuContainer}>
      <ul className={css.menuList}>
        <li className={css.menuItem}>
          <Link href={`/notes/filter/all`} className={css.menuLink}>All Notes</Link>
        </li>
          {categories.map((category) => (
        <li key={category} className={css.menuItem}>
            <Link href={`/notes/filter/${category}`} className={css.menuLink}>{category}</Link>
        </li>
       ))}
      </ul>
   </div>

    )
}

export default SidebarNotes;