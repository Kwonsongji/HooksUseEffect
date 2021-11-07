import React, { useState, useEffect} from 'react';


const FunctionCount = () => {
  const [count, setCount] = useState(0);
  // on lui passe comme param' une fonction fleché qui s'enclenche pour chaque render ( montage, maj, demontage)
  useEffect(() => {
    setTimeout(() => {
          document.title=`Vous avez cliqué ${count} fois`
    }, 5000) //function qui s'enclenche au bout de 5 sec

  })
  return (
    <div>
      <h1> {count}</h1>
      <button onClick={()=>setCount(count + 1)}>Cliquer</button>
    </div>
  )
}

export default FunctionCount
