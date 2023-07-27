import Image from 'next/image'
import Link from 'next/link'
import CSS from 'csstype';

export default function Home() {
  const title: CSS.Properties = {
    fontSize: '8rem',
  }
  const slogan: CSS.Properties = {
    fontSize: '3.5rem',
    color: '#FF6584',
  }
  const some_text: CSS.Properties = {
    fontSize: '3rem',
  }
  return (
    <main className='relative w-full h-full'>
      <span className='absolute bottom-5 right-28 text-primary' style={some_text}>HCSH VISION</span>
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
          <img src="https://scontent.ftpe7-1.fna.fbcdn.net/v/t39.30808-6/307022396_442392851326280_3990119351118316559_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=vW_sxCZ2ZlYAX92W027&_nc_oc=AQll24_FQJq2q10KCTw4CfgufyLXti5f6EZW3aZIrJhMXdcjc6dL6p1S7qRFXQqC0X0&_nc_ht=scontent.ftpe7-1.fna&oh=00_AfDkCg76igailkn_fxXnZJPRw4l_2m3nQ1qkUKsZkuOyiA&oe=64C76D1C" alt="" />
        </div>

      </div>

    </main>
  )
}
