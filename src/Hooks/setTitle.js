import { useEffect } from "react"

const UseTitle = title => {
    useEffect(() => {
        document.title = `${title}-Kiddy Teddy`

    }, [title])

}

export default UseTitle