import Layout from '../../components/Layout'

const SinglePost = ({post}) =>{
if(!post.title)return "Поста нет"


    return (

            <Layout title={post.title} description={post.body}>
            <h1>{post.title}</h1>
            <div>{post.body}</div>
            </Layout >

    )
}

export async function getServerSideProps({query}) {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
    const post = await data.json()

    return {
        props: {post}
    };
}

export default SinglePost

