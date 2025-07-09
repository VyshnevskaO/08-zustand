'use client'
import css from "./TagsMenu.module.css"
import { useState } from "react"
import Link from "next/link"
import { Category } from "@/types/note"

const categories: Category[] = ['Todo', 'Work', 'Personal', 'Meeting', 'Shopping'];


const TagsMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (

    <div className={css.menuContainer}>
        <button className={css.menuButton} onClick={toggle}>Notes ▾</button>
            {isOpen && (
                <ul className={css.menuList}>
                    <li className={css.menuItem}>
                        <Link href={`/notes/filter/all`} className={css.menuLink} onClick={toggle}>All Notes</Link>
                    </li>
                    {categories.map((category) => (
                    <li key={category} className={css.menuItem}>
                        <Link href={`/notes/filter/${category}`} className={css.menuLink} onClick={toggle}>
                        {category}</Link>
                   </li>
                 ))}

             </ul>
            )}
    
    </div>

)
}

export default TagsMenu;