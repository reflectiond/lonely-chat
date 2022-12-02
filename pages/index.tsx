import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Authorization from './Components/Authorization'
import {useState, useEffect} from 'react'

export default function Home() {

  const [userName, setUserName] = useState('')
  const [isUserNameSubmitted, setIsUserNameSubmitted] = useState(false);

  useEffect(()=>{
    if (sessionStorage.getItem("userName")){
      setIsUserNameSubmitted(true);
    }
  }, []);
  function inputHandler(value: string){
    setUserName(value);
  }
  function submitHandler(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    if (userName!==''){
      sessionStorage.setItem("userName", userName);
      setIsUserNameSubmitted(true);
    }
  }
  const firstRender= () =>{
    if (!isUserNameSubmitted){
      return <Authorization submitHandler={(e: React.FormEvent<HTMLFormElement>)=>submitHandler(e)} inputHandler={(value: string)=>inputHandler(value)} value={userName}/>
    }
    return <div>Hellao</div>
  }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Lonely chat</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous" />
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossOrigin="anonymous"></script>
      </Head>
      <div className='container text-center'>
        <div className='row justify-content-center mt-3'>
          <div className="col-6 col-xs-12 h3">Lonely chat</div>  
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-lg-4 offset-lg-4 col-sm-6 offset-sm-3">
            {firstRender()}
        </div>
      </div>
    </div>
  )
}
