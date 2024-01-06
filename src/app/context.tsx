

export default function Context(props: { img_src: string, title: string, content: JSX.Element, flip?: boolean, date?: string }) {
  const text = (
    <div className="min-w-0 relative flex-auto text-center">
      <h1 className="title text-5xl font-semibold text-slate-900">{props.title}</h1>
      {props.content}
      {props.date &&
        <p className="text-slate-400 font-medium text-sm sm:text-base leading-tight dark:text-slate-400">{props.date}</p>
      }

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