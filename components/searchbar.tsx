import React from 'react'
import { useState } from 'react'

function Searchbar({getQuery}: any) {
    const[text, setText]= useState('')

    const onChange = ({q}: any) => {
        setText(q)
        getQuery(q)
    }
    return (
        <section className='search'>
            <form>
                <input
                type='text'
                value={text}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Search for a Wizard"
                />
            </form>
        </section>

    )}

export default Searchbar