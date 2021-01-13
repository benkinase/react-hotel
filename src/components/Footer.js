import React from "react";

export default function Footer() {
  const getDate = () => {
    return new Date().getFullYear();
  };

  return (
    <div>
      <footer className='footer'>
        <ul className='social-icons'>
          <li>
            <a
              href='https://www.github.com/benkinase'
              target='_blank'
              rel='noopener noreferrer'
              className='social-icon'
            >
              <i className='fab fa-github'></i>
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/benjamin-gbenimako'
              target='_blank'
              rel='noopener noreferrer'
              className='social-icon'
            >
              <i className='fab fa-linkedin'></i>
            </a>
          </li>
        </ul>

        <p className='date'>
          &copy; <span>{getDate()}</span> Homecoming GmbH
        </p>
      </footer>
    </div>
  );
}
