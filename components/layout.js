import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        {children}
        <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background-color: #999;
        }
        * {
          box-sizing: border-box;
        }
        a{
          text-decoration: none;
        }
        ul{
          list-style:none;
        }
      `}</style>
    </div>
  )
}

export default layout