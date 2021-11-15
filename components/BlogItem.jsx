import Link from 'next/link'
import layout from "./Layout";

const BlogItem = (props) =>{
    return (
        <div className='blog-item'>
            <h5>{props.title}</h5>
            <p>
                {props.description}
            </p>
            <Link href='/blog/[id]' as={`/blog/${props.id}`}>
                <a>Прочитать</a>
            </Link>
        </div>
    )
}


export default BlogItem;