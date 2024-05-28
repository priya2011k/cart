


import React from 'react'

const Contact = () => {
  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder="Name" />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Email" />

        <label htmlFor="message">Message</label>
        <textarea name="message" placeholder="Message"></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact
