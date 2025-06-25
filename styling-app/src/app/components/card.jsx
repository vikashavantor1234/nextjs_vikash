export function Card(){

    return <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white ">
        <div className="px-8 py-10 bg-[#50d71e]">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{description}</p>
        </div>
    </div>
}