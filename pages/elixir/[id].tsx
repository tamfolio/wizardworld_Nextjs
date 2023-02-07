import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'

type Elixirs = {
  id:              string;
  name:            string;
  effect:          string;
  sideEffects:     string;
  characteristics: null;
  time:            null;
  difficulty:      string;
  ingredients:     [];
  inventors:       any[];
  manufacturer:    null;
}


export const getStaticPaths: GetStaticPaths = async () => {
  // ...
  const res = await fetch('https://wizard-world-api.herokuapp.com/elixirs')
  const elixirs: Elixirs[] = await res.json()

  const paths = elixirs.map(elixir => {
    return {
      params: {id: elixir.id.toString()}
    }
  })

  return {
    paths,
    fallback :true
  }
}

export const getStaticProps: GetStaticProps<{ elixirs: Elixirs[] }> = async (
  context
) => {
 const id = context.params.id
  const res = await fetch('https://wizard-world-api.herokuapp.com/elixirs/' + id)
  const elixirs: Elixirs[] = await res.json();
  return {
    props: {
      elixirs,
    },
  }
}



function ElixirPage({elixirs}: any) {
  return (
    <div className='elixirpage'>
        <h1 className='text-3xl text-red-500'>Name: {elixirs.name}</h1>
        <p>Effects: {elixirs.effect}</p>
        <p>SideEffects: {elixirs.sideEffects}</p>
        <p>Difficulty:{elixirs.difficulty}</p>
        <p>Ingredents: {elixirs.ingredients.map((item : any) => (
          <h1>{item.name}</h1>
        ))}</p>
    </div>
  )
}

export default ElixirPage
