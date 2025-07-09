import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";


type NotesByCategoryProps = {
    params: Promise<{ slug: string[] }>;
}


export async function generateMetadata({ params }: NotesByCategoryProps){
    const {slug} = await params
    const category = slug[0] === "all" ? undefined : slug[0];
    const title = category ? `${category} notes` : "All notes";
    const description = category ? `Notes filtered by category ${category}.` : "No filter applied. All notes are shown.";
       return{
        title,
        description,
        openGraph: {
         title,
         description,
         url: `https://notehub.com/notes/filter/${category || "all"}`,
         images: [
        {
          url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
          width: 1200,
          height: 630,
          alt: 'NoteHub Logo',
        },
      ],
        
    },
    }
 

    
}

const NotesByCategory = async ({ params }: NotesByCategoryProps) => {
    const { slug } = await params;
    const category = slug[0] === "all" ? undefined : slug[0];
    const response = await fetchNotes({ page: 1, query: "", tag: category });
    return (
        <div>
            <NotesClient initialData={response} tag={category}/>
        </div>
    )
}

export default NotesByCategory;