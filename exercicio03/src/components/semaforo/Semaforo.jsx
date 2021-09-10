import React, { useState } from 'react'

export default function Semaforo() {

    const [countdown, setCountdown] = useState(1)
    const [semaforo, setSemaforo] = useState('')

    const alteraSemaforo = () => {
        if (countdown == 1) {
            setSemaforo('red')
        }
        else if (countdown == 2) {
            setSemaforo('yellow')
        } else if (countdown == 3) {
            setSemaforo('green')
        } else {
            setCountdown(1)
            return
        }

        setCountdown(countdown + 1)


    }

    return (
        <>
            <section>
                <div id="farol">
                    <h2 style={{ color: (countdown - 1) == 1 ? semaforo : 'black' }}>Pare</h2>
                    <h2 style={{ color: (countdown - 1) == 2 ? semaforo : 'black' }}>Atenção</h2>
                    <h2 style={{ color: (countdown - 1) == 3 ? semaforo : 'black' }}>Siga</h2>

                </div>
                <button onCLick={alteraSemaforo}>EXECUTAR</button>
            </section>
        </>
    )
}