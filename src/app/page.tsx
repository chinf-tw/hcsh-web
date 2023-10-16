import Image from 'next/image'
import Link from 'next/link'
import CSS from 'csstype';

export default function Home() {
  const title: CSS.Properties = {
    fontSize: '8rem',
    color: '#FFF600',
  }
  const slogan: CSS.Properties = {
    fontSize: '3.5rem',
    color: '#FFFFFF',
  }
  const some_text: CSS.Properties = {
    fontSize: '3rem',
  }
  const bg_style: CSS.Properties = {
    backgroundColor: 'rgba(255, 255, 255, 0.23)',
  }
  const bg_style2: CSS.Properties = {
    backgroundColor: '#000928',
  }
  const main_color: CSS.Properties = {
    color: '#FFFFFF',
  }

  return (
    <div className="w-screen h-screen grid place-items-center" style={bg_style2}>
      <div className='relative w-10/12 h-4/6' style={bg_style}>
        <main className='relative w-full h-full'>
          <span className='absolute bottom-5 right-28' style={{...some_text, ...main_color}}>HCSH VISION</span>
          <div className='relative drop-shadow-lg pl-32 pt-10' style={title}>雙基異象</div>
          <div className='flex flex-row'>
            <div className='basis-1/2 pl-20 pt-6'>
              <div className='grid grid-cols-2' style={slogan}>
                <span>榮耀教會</span>
                <span>活出命定</span>
                <span>世代傳承</span>
                <span>普世宣教</span>
              </div>
              <button className=' mt-7 text-xl bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-3 px-14 border border-blue-500 hover:border-transparent rounded'>瞭解更多</button>
            </div>
            <div className='basis-1/2 pr-20'>
              <img src="./百人受洗.jpg" alt="" />
            </div>

          </div>

        </main>
      </div>
    </div>

  )
}
