import { GetStaticProps } from 'next'
import Link from 'next/link';
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'

type Spells = {
    id:          string;
    name:        string;
    incantation: null | string;
    effect:      string;
    canBeVerbal: boolean | null;
    type:        string;
    light:       string;
    creator:     null;
}


export const getStaticProps: GetStaticProps<{ spells: Spells[] }> = async (
  context
) => {
  const res = await fetch('https://wizard-world-api.herokuapp.com/spells')
  const spells: Spells[] = await res.json()
  console.log("spells",spells)

  return {
    props: {
      spells,
    },
  }
}

// export async function getServerSideProps({context}: any) {
//   const { id } = context.query
//   const res = await fetch(`https://wizard-world-api.herokuapp.com/spells/${id}`)
//   const spell = await res.json();

//   console.log(`spell: ${spell.name}`)

//   return{
//     props: {
//       spell
//     }
//   }
// }




function Spells({spells} : any) {
    return (
      <div className='Spells'>
            <h1>Spells</h1>
        <div className="spell-container">
        {spells.map((spell: Spells) => (
            <div className='spell-box'>
              <Link href={`/spells/${spell.id}`}>
              <h1>{spell.name}</h1>
                <p>Incantation: {spell.incantation || "none"}</p>
                <p>Type: {spell.type}</p>
              </Link>
                
            </div>
          
        ))}
        </div>
      </div>
    )
  }

  export default Spells

