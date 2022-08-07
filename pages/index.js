import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import profilePhoto from '../public/assets/folder/1.jpg'

export default function About() {
  console.log(profilePhoto);
  return (
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
  )
}
