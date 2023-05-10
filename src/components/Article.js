import React from 'react'

const Article = ({ title, date, preview }) => {
    const formatDate =  date || "January 1, 1970"
  return (
    <div>
        <article>
            <h3>{title}</h3>
            <small>{formatDate}</small>
            <p>{preview}</p>
        </article>
    </div>
  )
}

export default Article