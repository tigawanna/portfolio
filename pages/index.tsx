import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import  Intro  from '../components/intro';
import About  from '../components/about';
import  Footer  from '../components/footer';



const Home: NextPage = () => {

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Dennis Kinuthia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full h-[100%] flex-col bg-slate-700">
      <div className="fixed top-0  h-[60px] w-screen  flex flex-col bg-slate-700 z-10 "></div>
      <Intro/>
      <About/>
      <Footer/>
      </main>

      <footer className="flex flex-col md:flex-row h-[100%] p-[3%] md:h-20 w-full 
      items-center justify-evenly border-t bg-slate-800">
        <div className='text-base md:text-lg text-slate-300 font-bold'>
          Contact me  
        </div>
        <div className='my-2 md:my-0 text-sm md:text-lg text-slate-300 font-mono'>
          Email: denniskinuthiaw@gmail.com  
        </div>
        <div className='my-2 md:my-0 text-sm md:text-lg text-slate-300 font-mono'>
          Github:<Link href="https://github.com/tigawanna" 
          ><a target="_blank" className="text-green-400">tigawanna</a></Link>
        </div>
        <div className='my-2 md:my-0 text-sm md:text-lg text-slate-300 font-mono'>
          Linkden:
          <Link href="https://linkedin.com/in/dennis-kinuthia"
          ><a target="_blank" className="text-green-400">dennis kinuthia</a></Link>
        </div>
      </footer>
    </div>
  )
}

export default Home
