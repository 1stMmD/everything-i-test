import { useState, useMemo } from "react"

function VirtualizedList() {
    const [scrollTop, setScrollTop] = useState<number>(0) 

    const innerHeight = useMemo(() => ((list.length + 1) * 40) + ((list.length) * 12),[])
    const startIdx = Math.floor(scrollTop / (40 + 12))
    const endIdx = Math.min(
        list.length,
        Math.round((scrollTop + window.innerHeight) / (40 + 12))
    )

    const items = []

    for(let i = (startIdx - 1); i <= (endIdx + 1) ; ++i){
        if(i < 0 || i > list.length) continue
        items.push({
            top : `${((i + 1) * 40) + ((i) * 12)}px`,
            data :  i
        })
    }

    const onScroll =( e : React.UIEvent<HTMLDivElement, UIEvent> ) => setScrollTop(e.currentTarget.scrollTop)

    return (
        <div
        onScroll={onScroll}
        className="
        w-[400px]
        overflow-y-scroll
        max-h-screen

        ">
            <div
            style={{
                height : `${innerHeight}px`
            }}
            className="
            relative
            ">
                <div
                className="
                h-[40px]
                sticky
                top-0
                bg-red-500
                z-[2]
                ">
                    Navbar
                </div>
                {items?.map(({data,top},idx) => (
                    <div
                    key={idx}
                    style={{
                        top
                    }}
                    className="
                    absolute
                    left-[0]
                    right-[0]
                    h-[40px]
                    bg-white
                    text-black
                    ">
                        {data}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default VirtualizedList

const list = Array(100).fill("test")