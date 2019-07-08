import React from "react"
import styles from './ContactForm.module.css'

const ContactForm = () => {
  return (
    <form
      action="https://formspree.io/gynxyarns@gmail.com"
      method="POST"
      className={styles['contactForm']}
    >
      <input className={styles['inputField']} type="email" name="email" placeholder="Your email"/>
      <textarea className={styles['textField']} name="message" placeholder="Enter Message"/>
      <button className={styles['sendButton']} type="submit">Send</button>
    </form>
  )
}

export default ContactForm