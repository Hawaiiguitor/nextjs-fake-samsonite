'use client'
import Image from 'next/image'
import Link from 'next/link'
import Search from '../../public/assets/search.svg'
import Logo from '../../public/assets/logo.svg'
import Cart from '../../public/assets/ShoppingCartLight.svg'
import LocationIcon from '../../public/assets/location.svg'
import UserIcon from '../../public/assets/BxUser.svg'
import MenuIcon from '../../public/assets/menu.svg'
import { useState } from 'react'
import { Button, Drawer } from 'antd';
import { IoMdArrowForward } from "react-icons/io";

function NavTitle(){
    return (<p>
        Naisway
    </p>)
}

export default function Nav(){
    const [menuPage, setMenuPage] = useState(false);
    const [open, setOpen] = useState(false);
    const menus = [
        {"path":"new",
        "name":"新品"}, 
        {"path":"baggage",
        "name":"行李箱"}, 
        {"path":"backpack",
        "name":"双肩包"}, 
        {"path":"test",
        "name":"包袋"},
        {"path":"test2",
        "name":"定制"}, 
        {"path":"test3",
        "name":"批发"}]
    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    return(
        <header className='px-[4px] md:px-[10px] sm:hover:bg-white text-[#f4f1f1] hover:text-[#0c0c0c]'>
            <div className='flex items-center px-[20px] pt-[16px] relative border-b-2'>
                <div className='md:w-1/3'></div>
                <div className='flex w-1/2 md:w-1/3 gap-x-2 items-center justify-start md:justify-center'>
                    <Image src={Logo} width='30' height='30' alt='Logo'></Image>
                    <Link href="/" className='text-[#110a17] text-1xl md:text-4xl'>
                        Fake Samsnite
                    </Link>    
                </div>
                <div className='flex w-1/2 md:w-1/3 gap-x-4 justify-end pr-[1px] md:pr-[15px]'>
                    <button>
                        <Image src={Search} width='20' height='20' alt='Search icon' ></Image>
                    </button>
                    <button>
                        <Image src={LocationIcon} width='20' height='20' alt='Location icon'></Image>
                    </button>
                    <button>
                        <Image src={UserIcon} width='20' height='20' alt='User icon'></Image>
                    </button>
                    <button>
                        <Image src={Cart} width='20' height='20' alt='Cart icon'></Image>
                    </button>
                    <button className='block sm:hidden' onClick={showDrawer}>
                        <Image src={MenuIcon} alt='Menu icon' ></Image>
                    </button>
                </div>
            </div>
            <nav className='hidden sm:block font-medium pt-[5px] pr-0.3'>
                <ul className='flex justify-center gap-x-10'>
                        {menus.map((post)=> (
                            <li key={post.path}>
                                <Link href={`/${post.path}`}>{post.name}</Link>
                            </li>
                        ))}
                </ul>
            </nav>
            <Drawer title={(<NavTitle></NavTitle>)} onClose={onClose} open={open} rootClassName='block sm:hidden'>
                <div className='grid gap-y-1 divide-y divide-slate-200 font-mono text-lg font-semibold'>
                    {menus.map((post)=>{
                        return (
                        <div className='flex justify-between items-center pr-4' key={post.path}>
                            <Link href={post.path} className='pl-2 pt-2'>{post.name}</Link>
                            <IoMdArrowForward />
                        </div>)
                        })}
                </div>
            </Drawer>
        </header>
        
    )
}