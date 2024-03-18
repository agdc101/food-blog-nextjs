import Link from 'next/link';

export default function BlogPostPage({ params }) {
    return (
        <main>
            <h1>Blog</h1>
            <p>Welcome to my blog</p>
            <p><Link href="/blog/post-1">Post 1</Link></p>
            <p><Link href="/blog/post-2">Post 2</Link></p>
            <p> current page {params.slug} </p>
        </main>
    )
}