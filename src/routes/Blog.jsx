import Card from "../component/Blog/Card";
import Head from "../component/Blog/Head";
import data from "../component/Blog/data";

export default function Blog() {
  const cards = data.map(i => {
    return (
      <Card
        key = {i.id}
        img = {i.theimg}
        title = {i.title}
        para = {i.phrase}
      />
    )
  })
  return (
    <div className="bg-white">
    
      <Head />
        <div className="flex flex-wrap gap-8 mt-20 align-middle self-center justify-center text-black">
          {cards}
        </div>
    </div>
  )
}