import Context from './context';
import Image from "next/image";
import cover from '../../public/cover.png';

const items = [
  { img_src: '/example_content.webp', title: 'HCSH  VISION', content: '榮耀教會 活出命定 世代傳承 普世宣教' },
  { img_src: '/hcsh_vision.jpg', title: 'RENEW 主日崇拜', content: '連線直播 ​週日 上午 09:20-11:30' },
  { img_src: '/example_content.webp', title: 'NEWS', content: 'XXX' },
  { img_src: '/example_content.webp', title: 'EVENT', content: 'XXX' },
];
function hcsh_vision(): JSX.Element {
  let item = items[0]
  return <Context img_src={item.img_src} title={item.title} content={item.content} flip={false} />;
}
function renew(): JSX.Element {
  let item = items[1]
  return <Context img_src={item.img_src} title={item.title} content={item.content} flip={true} />;
}
function news(): JSX.Element {
  return (
    <>
      <h1 className='title text-5xl font-semibold text-slate-900'>NEWS</h1>
      <div className="grid grid-cols-3 px-20">
        <img className='p-2' src="/1.png" alt="" />
        <img className='p-2' src="/2.png" alt="" />
        <img className='p-2' src="/3.png" alt="" />
      </div>
    </>
  )
}
function event(): JSX.Element {

  return (
    <>
      <h1 className='title text-5xl font-semibold text-slate-900'>EVENT</h1>
      <div className="flex justify-center">
        <iframe className='' width="560" height="315" src="https://www.youtube.com/embed/4xE_DwTbAJc?si=xCzIeCa6shtj568w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>

    </>
  )
}
export default function Home() {
  return (
    <div>
      <Image className='rounded-md' src={cover} alt="" />
      {hcsh_vision()}
      {renew()}
      {news()}
      {event()}
      {/* {items.map((item, index) => (
        <Context key={index} img_src={item.img_src} title={item.title} content={item.content} flip={index % 2 != 0} />
      ))} */}
    </div>
  )
}
