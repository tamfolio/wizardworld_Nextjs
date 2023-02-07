import React from 'react'
import { GetStaticPaths,GetStaticProps } from 'next';


type Wizards = {
  elixirs:   [];
  id:        string;
  firstName: null | string;
  lastName:  string;
}


export const getStaticPaths: GetStaticPaths = async () => {
  // ...
  const res = await fetch('https://wizard-world-api.herokuapp.com/wizards')
  const wizards: Wizards[] = await res.json()

  const paths = wizards.map(wizard => {
    return {
      params: {id: wizard.id.toString()}
    }
  })

  return {
    paths,
    fallback :true
  }
}

export const getStaticProps: GetStaticProps<{ wizards: Wizards[] }> = async (
  context
) => {
 const id = context.params.id
  const res = await fetch('https://wizard-world-api.herokuapp.com/wizards/' + id)
  const wizards: Wizards[] = await res.json();
  return {
    props: {
      wizards,
    },
  }
}



function WizardPage({wizards}: any) {
  
  return (
    <div>
        <h1>{wizards.firstName === null ? wizards.lastName : wizards.firstName +  " " + wizards.lastName}</h1>
    </div>
  )
}

export default WizardPage
