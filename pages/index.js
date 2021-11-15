import Layout from "../components/Layout"
import BlogItem from "../components/BlogItem"

export default function Home(props) {
  return (
    <Layout >
  <h1>Блог </h1>
      {props.posts.map(post =>(
          <>
            <BlogItem title={post.title} description={post.body} id={post.id}/>
          </>

        ))}
    </Layout>
  )
}

export async function getServerSideProps() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await data.json()

  return {
    props: {posts}
  };
}