import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  async function handleOnSubmit(e) {
    e.preventDefault();
    const formData = {};
    Array.from(e.currentTarget.elements).forEach(field => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });
    fetch('/api/mail', {
      method: 'post',
      body: JSON.stringify(formData)
    })
    console.log('formData: ', formData);
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Contact Form
        </h1>

        <p className={styles.description}>
          Please be a human
        </p>

        <div className={styles.grid}>
          <style jsx>{`
          label {
            display: block;
            margin-bottom: .4em;
          }
          button {
            color: white;
            font-size: 1em;
            background-color: blue;
            padding: .8em 1em;
            border: none;
            border-radius: .2em;
          }
          `}
          </style>
          <form method="post" onSubmit={handleOnSubmit}>
            <p>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </p>
            <p>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" />
            </p>
            <p>
              <label htmlFor="message">Message</label>
              <textarea name="message" />
            </p>
            <button>Submit</button>
          </form>
        </div>
      </main>     
    </div>
  )
}
