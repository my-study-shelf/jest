import { useState, useCallback } from 'react';

const title = ['覃', '淇', '韩']

const Header = () => {
    const [nameIndex, setNameIndex] = useState(0)

    const netxName = useCallback(() => {
        setNameIndex(i => ++i > title.length - 1 ? 0 : i)
    }, [])

    return (
        <header>
            <div>{title[nameIndex]}</div>
            <button onClick={netxName}>下一个名字!</button>
        </header>
    )
}

export default Header
