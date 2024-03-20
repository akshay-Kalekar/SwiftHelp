import React from "react"
export default function Card({img,title,para})
{
    return (
        <a href="https://thediplomat.com/">
        <div className="card p-0">
        <div className="card w-96  p-0 rounded-none border-black shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body bg-white">
                <h2 className="card-title">{title}</h2>
                <p>{para}</p>
            </div>
            </div>
        </div>
        </a>
        )
}