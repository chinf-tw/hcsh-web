

export default function Context(props: { img_src: string, title: string, content: string, flip?: boolean }) {
  const text = (
    <div className="min-w-0 relative flex-auto text-center">
      <h1 className="text-3xl font-semibold text-slate-900 truncate">{props.title}</h1>
      <p className="text-slate-500 font-medium text-sm sm:text-base leading-tight dark:text-slate-400">{props.content}</p>
    </div>
  )
  const img = (
    <img width="60%" className="flex-none rounded-md bg-slate-100" src={props.img_src} alt="" srcSet="" />
  )
  if (props.flip) {
    return <div className="flex items-center space-x-6 p-6">
      {text}
      {img}
    </div>;
  } else {
    return <div className="flex items-center space-x-6 p-6 bg-neutral-100">
      {img}
      {text}
    </div>;
  }
}