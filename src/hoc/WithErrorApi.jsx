import { useState } from "react"

import ErrorMessage from "@components/ErrorMessage/ErrorMessage"

export const WithErrorApi = View => {

    return function WithErrorApi(props) {
        const [errorApi, setErrorApi] = useState(false)

        return (
            <div>
                {errorApi
                    ? <ErrorMessage/>
                    : (
                        <View
                            setErrorApi={setErrorApi}

                            {...props}
                        />
                    )
                }

            </div>)
    }
} 