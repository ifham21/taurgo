import React from 'react'
import "./ClientRegister.css";

const ClientRegister = () => {
  return (
    <form>
        <label htmlFor="org-reference">Organisation Reference</label>
        <input
          type="text"
          id="org-reference"
          placeholder="Organisation name"
        />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
        />
        <label htmlFor="repeat-password">Repeat Password</label>
        <input
          type="password"
          id="repeat-password"
          placeholder="Repeat your password"
        />
        <button type="submit" className="btn btn-register">
          Register
        </button>
    </form>
  )
}

export default ClientRegister