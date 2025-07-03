import React from 'react'
import './ButtonComp.style.scss'

const ButtonComp = ({children,buttonType,...otherprops}) => {

     const btn_class={
        google:'google-sign-in',
        inverted:"inverted"
     }

   

  return (
    <button className={`button-container ${btn_class[buttonType]}}`} {...otherprops}>{children}</button>
  )
}

export default ButtonComp
