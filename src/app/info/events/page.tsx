import Context from '../../context';
import Image from "next/image";
import cover from '../../../../public/cover.png';


const items = [
  { img_src: '/help.jpg', date: "2023/11/25", title: '舊鞋救命募集', content: <div className="content">特別感謝中永和社區鄰里長<br />FB社群「我是永和人」積極響應<br />讓我們把滿滿的愛心送到非洲</div> },
  { img_src: '/Anton Cruz.webp', date: "2023/10/22", title: '克安通牧師', content: <div className="content">克安通 (Rev. Anton Cruz)牧師<br />不僅是一位國度型牧者<br />在印度更是無數名孤兒的屬靈父親</div> },
  { img_src: '/LINE_ALBUM_網頁封面圖_240106_1.jpg', title: '暑期培育系統', content: '本次暑假到九月共10周 領袖班、門徒班、成長班一起在基督裡長大成熟' },
  { img_src: '/example_content.webp', date: "2023/09/02", title: '青年使命團交流', content: '感謝青年使命團的到來，讓孩子們聽見耶穌、得著祝福' },
];

export default function Home() {
  return (
    <div>
      <Image className='rounded-md' src={cover} alt="" />
      {items.map((item, index) => (
        <Context key={index} img_src={item.img_src} title={item.title} content={item.content} flip={index % 2 != 0} date={item.date} />
      ))}
    </div>
  )
}