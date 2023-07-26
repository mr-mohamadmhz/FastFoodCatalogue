import React from "react"
import { useState } from "react"
import { SearchOutlined } from "@ant-design/icons"

export default function SearchBar({searchItems}) {
    const [value,setValue]=useState('')

    const onSubmit =(e)=>{
        e.preventDefault();
        searchItems(value)
    }
    return (
        <>
            <form onSubmit={onSubmit} action="" className="w-[35%] ">
                <div className="relative">
                    <input className="py-3 px-2 shadow rounded-[25px] bg-slate-100 w-full outline-none"
                        placeholder="چی می قولی ؟"
                        type="text" 
                        value={value}
                        onChange={(e)=>setValue(e.target.value)}/>
                    <SearchOutlined 
                    onClick={onSubmit}
                    className="text-slate-400 absolute px-3 text-[20px] leading-[40px] border-slate-400
                border-r-2 h-full left-[0] cursor-pointer"/>
                </div>
            </form>
        </>
    )
}