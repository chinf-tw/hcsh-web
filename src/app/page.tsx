import Context from './context';

const items = [
  { img_src: '/2023_vision.webp', title: 'HCSH  VISION', content: '榮耀教會 活出命定 世代傳承 普世宣教' },
  { img_src: '/example_content.webp', title: 'renew 主日崇拜', content: '連線直播 ​週日 上午 09:20-11:30' },
  { img_src: '/example_content.webp', title: 'NEWS', content: 'XXX' },
  { img_src: '/example_content.webp', title: 'EVENT', content: 'XXX' },
];

export default function Home() {
  return (
    <div>
      <img className='rounded-md' src="/example_cover.webp" alt="" srcSet="" />
      {items.map((item, index) => (
        <Context key={index} img_src={item.img_src} title={item.title} content={item.content} flip={index % 2 != 0} />
      ))}
    </div>
  )
}
