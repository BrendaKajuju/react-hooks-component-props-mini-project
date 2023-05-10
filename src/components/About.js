import React from 'react'

const About = (props) => {
    const imageSource = props.image ?? "https://via.placeholder.com/215"
  return (
    <aside>
        <img src={imageSource} alt='blog logo'/>
        <p>{props.about}</p>
    </aside>
  )
}

export default About