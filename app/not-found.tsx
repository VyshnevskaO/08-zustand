import { Metadata } from "next";
import css from "./Home.module.css"


export const metadata:Metadata = {
 title:'Page Not Found | NoteHub',
 description: 'Sorry, the page you are looking for does not exist or has been moved. Explore notes or go back to the homepage.',
 openGraph:{
    title: 'Page Not Found | NoteHub',
    description: 'Sorry, the page you are looking for does not exist or has been moved. Explore notes or go back to the homepage.',
    url: `https://notehub.com/404`,
    images: [
        {
          url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
          width: 1200,
          height: 630,
          alt: 'NoteHub app interface preview with sticky notes and handwritten text elementsNoteHub ',
        },
      ],
      type: 'website',
 }
}

const NotFound = () => {
    
    return (
        <div>
        <h1 className={css.title}>404 - Page not found</h1>
     <p className={css.description}>Sorry, the page you are looking for does not exist.</p>

    </div>
    )
}

export default NotFound;