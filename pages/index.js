import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import profilePhoto from '../public/assets/folder/1.jpg'
import waves from '../public/assets/folder/wave-haikei.svg';
import  projects  from '../public/assets/folder/projects.json';

export default function Home() {
  
  return (
    <div>
      <Image src={waves} alt="Waves" layout='fill' objectFit='cover' />
      <Head>
        <title>Michael Odumosu</title>
        <meta name="description" content="Michael Odumosu's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><Image src={profilePhoto} alt="Profile Photo" /></figure>
          {/* <div className='class1'></div> */}
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>

        </div>

        <div className="w-full grid grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="card card-compact bg-base-100 shadow-xl m-3">
              <div className='card-body'>
              <figure><Image src={project.photo} alt="Profile Photo" width={100} height={100} /></figure>
                <h2 className="card-title">{project.title}</h2>
                <p>{project.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">{project.button}</button>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </main>

    </div>


  )
}
