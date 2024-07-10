import btnCs from './Btn.module.css'
import cs from './Pager.module.css'
import React from 'react';


type PagerProps = {
    setPageIx: (ix: number | ((ix: number) => number)) => void
    pageIx: number
    pagesCount: number
}

const Pager: React.FC<PagerProps> = ({ setPageIx, pageIx, pagesCount }) => {
    console.log('pager')

    return (
        <aside className={cs['pager']}>
            <div>
                <button
                    onClick={() => setPageIx(1)}
                    className={btnCs['btn']}
                >
                    {'<<'}
                </button>
                <button
                    onClick={() => setPageIx(ix => ix - (ix > 1 ? 1 : 0))}
                    className={`${btnCs['btn']} ${cs['pager__left-step-btn']}`}
                >
                    {'<'}
                </button>
            </div>
            <div className={cs['pager__jump-btns']}>
                {Array.from({ length: pagesCount }, (_, i) =>
                    <button
                        onClick={() => setPageIx(i + 1)}
                        className={
                            btnCs['btn']
                            + ' ' + (i + 1 === pageIx ? btnCs['btn_cur'] : '')
                            + ' ' + cs['pager__jump-btn']
                        }
                        key={i}
                    >
                        {i + 1}
                    </button>
                )}
            </div>
            <div>
                <button
                    onClick={
                        () => setPageIx(ix => ix + (ix < pagesCount ? 1 : 0))
                    }
                    className={`${btnCs['btn']} ${cs['pager__right-step-btn']}`}
                >
                    {'>'}
                </button>
                <button
                    onClick={() => setPageIx(pagesCount)}
                    className={btnCs['btn']}
                >
                    {'>>'}
                </button>
            </div>
        </aside>
    )
}


export type { PagerProps }
export { Pager }
