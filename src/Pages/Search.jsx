import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Search() {

    const [prod, setProd] = useState([])
    const [input, setInput] = useState("Search")
    const [search, setSearch] = useState("")

    const getProduts = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/products")
            console.log(response)
            setProd(response?.data?.products)
        } catch (error) {
            console.log(error)
        }

    }
    // console.log(prod)

    useEffect(() => {
        getProduts();
    }, [])

    const getSearch = async () => {
        try {
            const response = await axios.get(`https://dummyjson.com/products/search?q=${search}`)
            console.log(response)
            setProd(response?.data?.products)
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        if (search) {
            getSearch();
        }
    }, [search])

    const onChange = (e) => {
        // console.log(e.target.value)
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSearch(input)
    }

    return (
        <>
            <div className="container mt-5">

                <form action="" onSubmit={handleSubmit}>
                    <input type="search" id='' name='' value={input} onChange={onChange} />
                    {/* ********** OR ********* */}
                    {/* <input type="search" id='' name='' value={input} onChange={(e)=>setInput(e.target.value)}  /> */}

                    <button className='btn-success'>Submit</button>
                    {/* <input type="submit" value="Submit" /> */}
                </form>

                {
                    prod.map((item, index) => {
                        return (
                            <div key={index}>
                                {item?.title}
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}
