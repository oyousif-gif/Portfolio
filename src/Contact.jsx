// File: Contact.jsx | Author: Omer Yousif | StudentID: 301093426 | Date: 2025-09-23
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ firstName:'', lastName:'', phone:'', email:'', message:'' })
  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()

    console.log('Contact form:', form)
    alert('Thanks! Your message has been captured.')
    window.location.href = '/'
  }

  return (
    <section>
      <h1>Contact Me</h1>
      <div className="panel">
        <p><strong>Email:</strong> oyousif1@my.centennialcollege.ca &nbsp; | &nbsp; <strong>Phone:</strong> (226) 700-9666</p>
      </div>
      <form className="form" onSubmit={onSubmit}>
        <div className="grid two">
          <input name="firstName" placeholder="First Name" onChange={onChange} required />
          <input name="lastName" placeholder="Last Name" onChange={onChange} required />
        </div>
        <div className="grid two">
          <input name="phone" placeholder="Contact Number" onChange={onChange} />
          <input type="email" name="email" placeholder="Email Address" onChange={onChange} required />
        </div>
        <textarea name="message" placeholder="Message" rows={4} onChange={onChange} required />
        <button className="btn" type="submit">Send</button>
      </form>
    </section>
  )
}
