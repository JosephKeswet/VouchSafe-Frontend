import { useRouter } from 'next/router'
import React, { useCallback, useState } from 'react'

type Props = {}

const useButton = (initialState:boolean = false) => {
    const [color,setColor] = useState<boolean>(initialState)
    

    const toggle = useCallback((): void => setColor(color => !color), []);
    return [color,toggle]
}

export default useButton

