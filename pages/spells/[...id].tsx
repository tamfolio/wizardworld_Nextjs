import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'


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

export const getStaticPaths: GetStaticPaths = async () => {
    // ...
    const res = await fetch('https://wizard-world-api.herokuapp.com/elixirs')
    const spells: Spells[] = await res.json()
  
    const paths = spells.map(spell => {
      return {
        params: {id: spell.id.toString()}
      }
    })
  
    return {
      paths,
      fallback :true
    }
  }
  
  export const getStaticProps: GetStaticProps<{ spells: Spells[] }> = async (
    context
  ) => {
   const id = context.params.id
    const res = await fetch('https://wizard-world-api.herokuapp.com/spells/' + id)
    const spells: Spells[] = await res.json();
    return {
      props: {
        spells,
      },
    }
  }
  
  



function SpellPage() {
  return (
    <div>
        <h1>Spell ID : {}</h1>
    </div>
  )
}

export default SpellPage
