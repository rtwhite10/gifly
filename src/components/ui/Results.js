import React from 'react'
import {apiQuery} from '../api/ApiRequest'

export default function Results() {
    const [search, setSearch]

    React.useEffect(() => {
        apiQuery()
    })
    return (
        <React.Fragment>

        </React.Fragment>
    )
}