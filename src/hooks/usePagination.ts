import { useState } from "react"


const usePagination = <A>(pageCap: number, xs: A[]) => {
    const [ pageIx, setPageIx ] = useState<number>(1)
    const firstIx = (pageIx - 1) * pageCap
    const lastIx = firstIx + pageCap
    const page = xs.slice(firstIx, lastIx)
    return [ page, pageIx, setPageIx ] as const
}


export { usePagination }
