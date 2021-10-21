import React, { Fragment, useEffect, useState } from 'react'
import NavBar from '../../common/navbar'

const Header = () => {

    return (

        <Fragment>
            <div className="flex px-4 w-full bg-solar-blue-200 border-b-2 border-gray-200">
                <NavBar />
                <div className="flex flex-auto items-center justify-end">
                    <span className="text-xl uppercase text-white font-bold text-shadow mr-2">Acompanhamento de vendas</span>
                </div>
            </div>
        </Fragment>
    )
}

export default Header
