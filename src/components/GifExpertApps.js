import React, { useState } from 'react'


function GifExpertApps() {

const [categories, setCategories] = useState(['Pokemon', 'Digimon', 'DragonBall'])

/*     const categories = ['Pokemon', 'Digimon', 'DragonBall'];
 */




    return (
        <div>
            <h2>GifExpertApps</h2>
            <hr />
            <button>Agregar</button>

            {/* solo se pueden metodos , asi que se necesita un map para imprimir la lista */}

            <ol> {categories.map(category => {
                return <li key={category}>{category}  </li>
            })
            }</ol>


                {/* El map es una pasada aunque no lo controle muy bien.
                Del map podemos sacar dos parámetros por defecto, el elemento y su indice. */}
        </div>
    )
}

export default GifExpertApps


/* Dentro del return en solo se puede poner expresiones de javascript que devuelvan un valor o METODOS! pero no ifs ni esas cosas. */