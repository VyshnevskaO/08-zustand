import NoteForm from '@/components/NoteForm/NoteForm';
import css from './CreateNote.module.css'
import { Metadata } from 'next';

export const metadata:Metadata = {
 title:'New Note',
 description: 'Create your new note',
 openGraph:{
    title:'New Note',
    description: 'Create your new note',
    url: `https://notehub.com/notes/action/create`,
      images: [
        {
          url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
          width: 1200,
          height: 630,
          alt: 'NoteHub Logo',
        },
      ],
      type: 'article',
 }
}

const CreateNote=()=> {


    return(
        <main className={css.main}>
          <div className={css.container}>
           <h1 className={css.title}>Create note</h1>
	         <NoteForm/>
          </div>
         </main>
 
    )
}

export default CreateNote;