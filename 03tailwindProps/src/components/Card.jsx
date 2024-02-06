import react from 'react'

const Card = ({userName})=>{
    return (
        <div className='display-flex flex-row'>
            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://yt3.googleusercontent.com/ytc/AGIKgqNzSoi1F3Af-LRhTw6a8lA8K7E3ps4NXw6yu1hL=s900-c-k-c0x00ffffff-no-rj" alt="" width="384" height="512" />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                    <p className="text-lg font-medium">
                    “Tailwind CSS is the only framework that I've seen scale
                    on large teams. It’s easy to customize, adapts to any design,
                    and the build size is tiny.”
                    </p>
                </blockquote>
                <figcaption className="font-medium">
                    <div className="text-sky-500 dark:text-sky-400">
                    Sarah Dayan
                    </div>
                    <div className="text-slate-700 dark:text-slate-500">
                    Staff Engineer,  {userName}
                    </div>
                </figcaption>
                </div>
            </figure>
        </div>
    )
}

export default Card;