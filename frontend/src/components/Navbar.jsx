import React, { useState } from 'react'
import { motion, useScroll, useTransform } from "framer-motion"

const Navbar = () => {

    const menus = [
        "Home",
        "To-Do"
    ]

    const { scrollY } = useScroll()
    const opacityOff = useTransform(scrollY, [0, 200], ["#FAFAFA00", "#FAFAFA"]);

    let [open, setOpen] = useState(false)
    let closeMenu = () => setOpen(false)

    const burgerStyle =
    "burger-item bg-black w-8 h-1 mb-1 bg-light ease-in-out duration-150 ";


return (
    <motion.nav 
        className='navigation-bar fixed top-0 z-10 w-screen flex justify-between items-center h-16 px-10 md:px-16 lg:px-24 '
        style={{
            backgroundColor: opacityOff
        }}
    >
        <p className='nav-logo text-2xl font-bold'>HarrisToDo</p>

        <div className={'nav-menus duration-300 bg-white bg-opacity-90 md:bg-opacity-0 absolute top-0 py-20 md:static  md:min-h-fit min-h-screen left-0 md:w-auto w-full flex items-center px-5 justify-center ' + (open ? "-top-0% " : "-top-[3000%] ")}>
            <ul className='menu-list flex flex-col md:flex-row gap-y-12 justify-center items-center md:gap-16'>
                {
                    menus.map( (menu, i) => (
                        <li 
                            key={i}     className='hover:text-blue-400 duration-200 text-xl md:text-lg'
                            onClick={closeMenu}
                        >
                            <a href={`/${menu.toLowerCase()}`}>{menu}</a>
                        </li>
                    ))
                }
            </ul>
        </div>

        <div
                id="navigation-burger"
                onClick={() => setOpen(!open)}
                className="cursor-pointer md:hidden z-10"
            >
                <div className={burgerStyle + (open && "relative rotate-45 top-2 ")} />
                <div className={burgerStyle + (open && "relative rotate-45 ")} />
                <div
                className={
                    burgerStyle + "mb-0 " + (open && "relative -rotate-45 bottom-2 ")
                }
                />
            </div>
    </motion.nav>
)
}

export default Navbar