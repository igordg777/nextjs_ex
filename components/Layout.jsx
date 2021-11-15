
import Link from 'next/link'
import Head from "next/head"

const layout = ({title, description = '', children}) =>{
    return (
        <>
        <Head>
            <title>{title}|| Simple Blog NextJS</title>
            <link rel='shortcut icon' href="https://pngicon.ru/file/uploads/gory.png" type="image/png"/>
            <meta name='description' content={description || 'Простой блог на Next.js'}/>
            <meta name='og:description' content={description || 'Простой блог на Next.js'}/>
        </Head>
        <header>
            <img src="https://pngicon.ru/file/uploads/gory.png" alt=""/>
            <Link href="/">
                <a>Главная</a>
            </Link>
        </header>
<div className="container">{children}</div>
            <footer>2021 &copy; Simple Blog NextJS</footer>
        </>
    )
}


export default layout;