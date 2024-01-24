export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          name: 'next.js',
        },
      }, // See the "paths" section below
    ],
    fallback: false, // false or "blocking"
  }
}

export async function getStaticProps(){
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const repo = await res.json()
  return { props: { repo } }
}

export default function Page({ repo }) {
  return (
    repo ? 
    <h1>{repo.html_url}</h1> : 'Loading'
  )
}