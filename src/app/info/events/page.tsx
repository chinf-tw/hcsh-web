import Context from '../../context';
import Image from "next/image";

const items = [
  { img_src: '/example_content.webp', title: '2023/9/2免費講座 破解情緒密碼', content: '不論在家庭、職場、校園 提升情緒覺察與表達力是 福音和身心健康的關鍵' },
  { img_src: '/Anton Cruz.webp', title: '2023/10/22 克安通牧師 in the house', content: '克安通 (Rev. Anton Cruz)牧師 不僅是一位國度型牧者 在印度更是無數名孤兒的屬靈父親。' },
  { img_src: '/example_content.webp', title: '2023/5/11 YMAN青年使命團交流', content: '感謝青年使命團的到來，讓孩子們聽見耶穌、得著祝福' },
  { img_src: '/example_content.webp', title: '暑期培育系統', content: '本次暑假到九月共10周 領袖班、門徒班、成長班一起在基督裡長大成熟' },
];

export default function Home() {
  return (
    <div>
      <Image className='rounded-md' src="/example_cover.webp" alt="" />
      {items.map((item, index) => (
        <Context key={index} img_src={item.img_src} title={item.title} content={item.content} flip={index % 2 != 0} />
      ))}
    </div>
  )
}