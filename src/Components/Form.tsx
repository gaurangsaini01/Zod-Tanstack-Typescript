import { useState } from "react"
import {postSchema} from "../zod/userSchema"
import z from "zod"

type Post = z.infer<typeof postSchema>
function Form() {
    const [post,setPost] = useState<Post | null>(null)
  return (
    <div className="flex flex-col">
        <label htmlFor="">userid</label>
        <input type="" name="userId"/>
        <label htmlFor="">id</label>
        <input type="" name="id"/>
        <label htmlFor="">title</label>
        <input type="" name="title"/>
        <label htmlFor="">body</label>
        <input type="" name="body"/>
    </div>
  )
}

export default Form