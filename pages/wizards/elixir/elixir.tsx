import { GetStaticProps } from 'next'

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


export const getStaticProps: GetStaticProps<{ elixirs: Elixirs[] }> = async (
  context
) => {
  const res = await fetch('https://wizard-world-api.herokuapp.com/elixirs')
  const elixirs: Elixirs[] = await res.json()
  console.log("elixirs",elixirs)

  return {
    props: {
      elixirs,
    },
  }
}


function Elixir({elixirs} : any) {
    return (
      <div className='Elixirs'>
            <h1>Elixirs</h1>
            <input type="text" placeholder='Search'/>
            <div className="elixir-container">
            {elixirs.map((elixirs: Elixirs) => (
            <div className='elixir-box'>
                <h1>{elixirs.name}</h1>
                <p>Difficulty: {elixirs.difficulty}</p>
            </div>
          
        ))}
            </div>
        
      </div>
    )
  }

  export default Elixir

