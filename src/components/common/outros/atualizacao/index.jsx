import React, { Fragment } from 'react'

const Aualizacao = ({ atualizacao }) => {

    return (
        <Fragment>
            {atualizacao.map((fat, index) => (
                <h1 key={index} className="text-xl text-right font-bold text-white text-shadow-md"> {fat.Atualizacao} </h1>
            ))}
        </Fragment>
    )
}

export default Aualizacao
