// for next.js's <head> tag and rendering images
import Head from 'next/head'
import Image from 'next/image'

// import the web3 library with setup from lib/web3.js
import { web3 } from '../lib/web3';

// import react hooks
import { useState, useEffect } from 'react';

// all from our components folder
import Account from '../components/Account'
import EthName from '../components/EthName'
import Answer from '../components/Answer'
import AnswerForm from '../components/AnswerForm'

export default function Home() {
  // todo:
  // 1. make the connect button work!
  // 2. get the answers from the API (see /api/answers.js file)
  // 3. add tipping like project 1
  // 4. make the user name look good
  // 5. let the user post their own reply

  return (
    <main>
      <header>
        <h1>The Book Clubbing Club</h1>

        <form>
          <input type="text" placeholder="Search" />
        </form>

        <button>Connect</button>
      </header>

      <section className="question">
        <div className="main">
          <h3>Feedback forum</h3>
          <h2>Looking for a good book recomendation</h2>
          <p>Hey everyone! The most recent books that I loved was the "The Tartar Steppe" by Dino Buzzati, "The Opposite Shore" by Julien Gracq, and "Hellstrom's Hive" by Frank Herbert. I was hoping to get some book recommendations on this forum based on my recent reads.</p>

          <div className="slides">
            <Image src="/image-1.jpg" width="600" height="800" />
            <Image src="/image-2.jpg" width="600" height="800" />
            <Image src="/image-3.jpg" width="600" height="800" />
          </div>
        </div>
        <div className="meta">
          
          {/* EthName */}
          <div className="eth-name">
            <img src="/avatar.jpg" alt="Avatar of anastasia.eth" />
            <div className="name">
              <span className="primary">anastasia.eth</span>
              <span className="secondary">0xb25bf3...aaf4</span>
            </div>
          </div>
          {/* end EthName */}

        </div>
      </section>

      <section className="answers">
        <div className="loading">Loading answers...</div>
      </section>

      <Head>
        <title>📖🪱</title>
        <meta property="og:title" content="Looking for feedback as a beginner on Potstop" />
        <meta property="og:description" content="This is a project on the SuperHi Crypto + Web3 for Creatives course" />
        <meta property="og:image" content="/social.png" />
      </Head>
    </main>
  )
}
