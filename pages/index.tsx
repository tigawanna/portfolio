import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import  Intro  from '../components/intro';
import About  from '../components/about';
import  Footer, { Project }  from '../components/footer';
import {motion} from 'framer-motion'
import LoadingScreen from '../components/navigation/LoadingScreen';
import { query, collection, orderBy } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { useFirestoreQueryData } from '@react-query-firebase/firestore';
import Icons from '../components/Icons'


const Home: NextPage = () => {

  const projectRef = query( collection(db, "projects"),orderBy("rank","desc"));
  const projectsQuery = useFirestoreQueryData(["project"], projectRef,{
    subscribe:true
  });
  const variants = {
    open: {
     transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
     transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
   };
 
  const projects=projectsQuery?.data as Project[]

  // if(projectsQuery.isLoading){
  //  return <LoadingScreen/> 
  // }
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
      <Footer fb_projects={projects}/>
      </main>

      <footer className="index-footer">
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

        <div className='my-2 md:my-0 text-sm md:text-lg text-slate-300 font-mono'>
          Articles:
          <Link href="https://dev.to/tigawanna"
          ><a target="_blank" className="text-green-400">tigawanna</a></Link>
        </div>
      </footer>
    </div>
  )
}

export default Home
