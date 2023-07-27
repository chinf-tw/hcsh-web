import Link from 'next/link'

function Logo() {
    return (
        <Link href='/' className='text-center font-medium'>
            <div className="max-w-sm mx-aut space-y-2 sm:flex sm:items-center sm:space-y-0">
                <img src='/hcsh.png' alt='logo' className='block mx-auto sm:mx-0 sm:shrink-0' />
                <div className="text-center sm:text-left">
                    <div className="space-y-0.5">
                        <p className="text-lg text-black font-semibold">
                            雙和基督之家全人關懷中心
                        </p>
                        <p className="text-slate-500 font-medium w-56">
                            HOME CHRIST OF CHURCH IN SHUANG HO
                        </p>
                    </div>
                    {/* <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button> */}
                </div>
            </div>
        </Link>
    )
}
function Item({ href, name, enName }: { href: string, name: string, enName: string }) {
    return (
        <Link href={href} className='text-center font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900'>
            {name}
            <br></br>
            {enName}
        </Link>
    )
}
export default function Nav() {
    const items = [
        { href: '/info/about-us', name: '關於我們', enName: 'ABOUT US' },
        { href: '/info/events', name: '最新消息', enName: 'EVENTS' },
        { href: '/info/media', name: '影音媒體', enName: 'MEDIA' },
        { href: '/info/give', name: '奉獻給予', enName: 'GIVE' },
        { href: '/info/charity', name: '社會關懷', enName: 'CHARITY' },
        { href: '/info/missions', name: '宣教活動', enName: 'MISSIONS' },
        { href: '/info/contact-us', name: '聯繫我們', enName: 'CONTACT US' },
    ]
    return (
        <nav className='flex flex-row justify-center space-x-2 p-3 place-items-center absolute bg-white w-screen'>
            <div className="basis-1/4"><Logo /></div>
            <div className='flex justify-end basis-3/4 place-items-center'>
            {items.map((item, index) => (
                <Item key={index} href={item.href} name={item.name} enName={item.enName} />
            ))}
            </div>
        </nav>
    )
}