import Image from 'next/image'
import Link from 'next/link'
import React from 'react';

function Logo() {
    return (
        <Link href='/' className='text-center font-medium'>
            <div className="max-w-sm mx-aut space-y-2 sm:flex sm:items-center sm:space-y-0">
                <Image src='/hcsh.png' alt='logo' className='block mx-auto sm:mx-0 sm:shrink-0' width={100} height={100} />
                <div className="text-center sm:text-left">
                    <div className="space-y-0.5">
                        <p className="text-lg text-black font-semibold">
                            雙和基督之家全人關懷中心
                        </p>
                        <p className="text-slate-500 font-medium w-56">
                            HOME OF CHRIST CHURCH IN SHUANG HO
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
function NavItem({ href, name, enName }: { href: string, name: string, enName: string }) {
    return (
        <Link href={href} className='text-center font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 w-32'>
            <p className='font-bold'>{name}</p>
            {enName}
        </Link>
    )
}

const items = [
    // { href: '/info/about-us', name: '關於我們', enName: 'ABOUT US' },
    { href: '/', name: '首頁', enName: 'HOME' },
    { href: '/info/events', name: '最新消息', enName: 'EVENTS' },
    { href: '/info/life', name: '生活', enName: 'LIFE' },
    { href: '/info/give', name: '奉獻給予', enName: 'GIVE' },
    { href: '/info/charity', name: '公益服務', enName: 'CHARITY' },
];

const Nav = React.forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <nav className='flex flex-row justify-center space-x-2 p-3 place-items-center fixed bg-white w-11/12 mx-auto shadow-md rounded-md left-1/2 transform -translate-x-1/2 z-50' ref={ref}>
            <div className="basis-1/4"><Logo /></div>
            <div className="basis-1/4"></div>
            <div className='flex justify-end basis-2/4 place-items-center'>
                {items.map((item, index) => (
                    <NavItem key={index} href={item.href} name={item.name} enName={item.enName} />
                ))}
            </div>
        </nav>
    );
});
Nav.displayName = 'Nav';
export default Nav;