import React, {useState} from 'react'
import './CompTeste.css'

export default function CompTeste() {
    const [aluno, setAluno] = useState("Leandro")

   return(
       <div>
           <p className="cTeste" >Aluno : {aluno}</p>
            <button onClick={()=> setAluno('Lucas')} onMouseOut={()=> setAluno('Lucas')}>Mudar</button>
       </div>               
)
}