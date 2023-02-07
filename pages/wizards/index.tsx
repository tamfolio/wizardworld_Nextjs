import Searchbar from '@/components/searchbar';
import { GetStaticProps } from 'next'
import Link from 'next/link';
import {useState, useEffect} from "react"


type Wizards = {
    elixirs:   [];
    id:        string;
    firstName: null | string;
    lastName:  string;
}


export const getStaticProps: GetStaticProps<{ wizards: Wizards[] }> = async (
  context
) => {
  const res = await fetch('https://wizard-world-api.herokuapp.com/wizards')
  const wizards: Wizards[] = await res.json()
  console.log("wizards",wizards)

  return {
    props: {
      wizards,
    },
  }
}


function Wizards({wizards} : any) {
    const [query, setQuery] = useState("");
    const [search, setSearch] = useState("");
    return (
      <div className='Wizards'>
            <h1>Wizards</h1>
            <Searchbar getQuery={({q} : any) => setQuery(q)}/>
            <div className="wizard-container">
            {wizards.map((wizard: Wizards) => (
            <div className='wizard-box'>
              <Link href={`/wizards/${wizard.id}`}>
                <h1>{wizard.firstName === null ? wizard.lastName : wizard.firstName +  " " + wizard.lastName}</h1>
              </Link>
            </div>
          
        ))}
            </div>
       
      </div>
    )
  }

  export default Wizards

