import React from 'react'
import './resource.css'
import About from './About/About'
import { AiFillClockCircle, AiFillPhone, AiFillHome, AiOutlineHome, AiFillHeart } from 'react-icons/ai'
import { FaCity, FaClinicMedical, FaRegCommentAlt, FaRainbow, FaTree } from 'react-icons/fa'
import { BsFillPlayFill, BsArrowRight, BsSun, BsFillOctagonFill } from 'react-icons/bs'
import { GiSiren, GiTwirlyFlower, GiClover } from 'react-icons/gi'
import { BiDonateHeart } from 'react-icons/bi'
import ReactToolTip from 'react-tooltip'

const resource = (props) => {
    let website = 'Website'
    if (props.website === '')
        website = null
    return (
        <div className="Resource">
            <h2 className="name">{props.name}</h2>
            <a className="phone" href={props.phone_link}>{props.formatted_phone}</a>
            <div><br></br></div>
            <a className="website" href={props.website} target="_blank" rel="noopener noreferrer">{website}</a>
            <About description={props.description} tags={props.tags}></About>
            <div className="table">
                <ul className="tags">
                    {props.tags.map(listitem => (
                        <li data-tip={listitem} className="icons">{AddIcons(listitem)}</li>
                    ))}
                </ul>
            </div>
            <ReactToolTip
                type="dark"
                clickable="true">
            </ReactToolTip>
        </div>
    )
}

function AddIcons(listitem) { 
    return iconMap.get(listitem)
}

let iconMap = new Map()
iconMap.set("Immediate", <BsFillPlayFill size="25px" />)
iconMap.set("24/7", <AiFillPhone size="25px" />)
iconMap.set("Pittsburgh", <FaCity size="25px" />)
iconMap.set("Limited Hours", <AiFillClockCircle size="25px" />)
iconMap.set("Referral", <BsArrowRight size="25px" />)
iconMap.set("Possible Police", <GiSiren size="25px" />)
iconMap.set("Crisis", <GiTwirlyFlower size="25px" />)
iconMap.set("Medical", <FaClinicMedical size="25px" />)
iconMap.set("Mental Health", <FaRegCommentAlt size="25px" />)
iconMap.set("Violence", <BsFillOctagonFill size="25px" />)
iconMap.set("Housing", <AiFillHome size="25px" />)
iconMap.set("Harm Reduction", <BiDonateHeart size="25px" />)
iconMap.set("Houseless", <AiOutlineHome size="25px" />)
iconMap.set("LGBTQ+", <FaRainbow size="25px" />)
iconMap.set("Families", <GiClover size="25px" />)
iconMap.set("Youth", <BsSun size="25px" />)
iconMap.set("Elders", <FaTree size="25px" />)
iconMap.set("Anyone", <AiFillHeart size="25px" />)

export default resource;