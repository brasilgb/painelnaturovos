import React, { Fragment } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useHistory } from 'react-router'
import { AiFillCaretUp } from 'react-icons/ai'

const NavBar = () => {

    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    const locate = splitLocation[1];
    const history = useHistory()
    
    setTimeout(function () {

        switch (locate) {
            case '': return history.push("/acompanhamento")
            case 'acompanhamento': return history.push("/vendasdia")
            case 'vendasdia': return history.push("/vendasmes")
            case 'vendasmes': return history.push("/vendasano")
            case 'vendasano': return history.push("/evolucao")
            case 'evolucao': return history.push("/")
            default: return false;
        };

    }, 15000);

    return (
        <Fragment>
            <nav className="flex">
                <ul className="h-14 text-sm gap-4 flex items-start justify-center font-bold uppercase">

                    <li className="relative">
                        <Link to="/">
                            <img className="h-12 my-1" src="./logo-solar.png" alt="" />
                        </Link>
                    </li>

                    <li className={"relative h-full px-4 text-white text-shadow flex items-center transition duration-300 hover:bg-white hover:text-yellow-500 " + (splitLocation[1] === "acompanhamento" ? "bg-white text-yellow-600" : "text-white")}>
                        <Link to="/acompanhamento">
                            Acompanhamento
                            {splitLocation[1] === "acompanhamento" && <div className="absolute left-0 w-full flex justify-center mx-auto text-gray-200 text-shadow" style={{ bottom: '-12px' }}>
                                <AiFillCaretUp className="text-4xl" />
                            </div>
                            }
                        </Link>
                    </li>

                    <li className={"relative h-full px-4 text-white text-shadow flex items-center transition  duration-300 hover:bg-white hover:text-yellow-500 " + (splitLocation[1] === "vendasdia" ? "bg-white text-yellow-600" : "text-white")}>
                        <Link to="/vendasdia">
                            Vendas Dia
                            {splitLocation[1] === "vendasdia" && <div className="absolute left-0 w-full flex justify-center mx-auto text-gray-200 text-shadow" style={{ bottom: '-12px' }}>
                                <AiFillCaretUp className="text-4xl" />
                            </div>
                            }
                        </Link>
                    </li>

                    <li className={"relative h-full px-4 text-white text-shadow flex items-center transition  duration-300 hover:bg-white hover:text-yellow-500 " + (splitLocation[1] === "vendasmes" ? "bg-white text-yellow-600" : "text-white")}>
                        <Link to="vendasmes">
                            Vendas Mês
                            {splitLocation[1] === "vendasmes" && <div className="absolute left-0 w-full flex justify-center mx-auto text-gray-200 text-shadow" style={{ bottom: '-12px' }}>
                                <AiFillCaretUp className="text-4xl" />
                            </div>
                            }
                        </Link>
                    </li>

                    <li className={"relative h-full px-4 text-white text-shadow flex items-center transition  duration-300 hover:bg-white hover:text-yellow-500 " + (splitLocation[1] === "vendasano" ? "bg-white text-yellow-600" : "text-white")}>
                        <Link to="vendasano">
                            Vendas Ano
                            {splitLocation[1] === "vendasano" && <div className="absolute left-0 w-full flex justify-center mx-auto text-gray-200 text-shadow" style={{ bottom: '-12px' }}>
                                <AiFillCaretUp className="text-4xl" />
                            </div>
                            }
                        </Link>
                    </li>

                    <li className={"relative h-full px-4 text-white text-shadow flex items-center transition  duration-300 hover:bg-white hover:text-yellow-500 " + (splitLocation[1] === "evolucao" ? "bg-white text-yellow-600" : "text-white")}>
                        <Link to="/evolucao">
                            Evolução do Mês
                            {splitLocation[1] === "evolucao" && <div className="absolute left-0 w-full flex justify-center mx-auto text-gray-200 text-shadow" style={{ bottom: '-12px' }}>
                                <AiFillCaretUp className="text-4xl" />
                            </div>
                            }
                        </Link>
                    </li>

                </ul>
            </nav>
        </Fragment >
    )
}

export default NavBar
