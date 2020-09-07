import React from 'react'
import './resource.css'
import { AiFillClockCircle, AiFillPhone, AiFillHome, AiOutlineHome, AiFillHeart } from 'react-icons/ai'
import { FaCity, FaClinicMedical, FaRegCommentAlt, FaRainbow, FaTree } from 'react-icons/fa'
import { BsFillPlayFill, BsArrowRight, BsSun } from 'react-icons/bs'
import { GiSiren, GiTwirlyFlower, GiClover } from 'react-icons/gi'
import { CgShapeHexagon } from 'react-icons/cg'
import { BiDonateHeart } from 'react-icons/bi'

const resource = (props) => {
    var list = props.tags
    let website = 'Website'
    if (props.website === '')
        website = null

    return (
        <div className="Resource">
            <h2 className="name">{props.name}</h2>
            <a className="phone" href={props.phone_link}>{props.formatted_phone}</a>
            <div><br></br></div>
            <a className="website" href={props.website} target="_blank">{website}</a>
            <p className="description">{props.description}</p>
            <ul className="tags">
                {list.map(listitem => (
                    <p key={listitem}>{AddIcons(listitem)}{listitem}</p>
                ))}
            </ul>
        </div>
    )
}

function AddIcons(listitem) {
    return iconMap.get(listitem)
}

let iconMap = new Map()
iconMap.set("Immediate", <BsFillPlayFill size="25px"/>)
iconMap.set("24/7", <AiFillPhone size="25px"/>)
iconMap.set("Pittsburgh", <FaCity size="25px"/>)
iconMap.set("Limited Hours", <AiFillClockCircle size="25px"/>)
iconMap.set("Referral", <BsArrowRight size="25px"/>)
iconMap.set("Possible Police", <GiSiren size="25px"/>)
iconMap.set("Crisis", <GiTwirlyFlower size="25px"/>)
iconMap.set("Medical", <FaClinicMedical size="25px"/>)
iconMap.set("Mental Health", <FaRegCommentAlt size="25px"/>)
iconMap.set("Violence", <CgShapeHexagon size="25px"/>)
iconMap.set("Housing", <AiFillHome size="25px"/>)
iconMap.set("Harm Reduction", <BiDonateHeart size="25px"/>)
iconMap.set("Houseless", <AiOutlineHome size="25px"/>)
iconMap.set("LGBTQ+", <FaRainbow size="25px"/>)
iconMap.set("Families", <GiClover size="25px"/>)
iconMap.set("Youth", <BsSun size="25px"/>)
iconMap.set("Elders", <FaTree size="25px"/>)
iconMap.set("Anyone", <AiFillHeart size="25px"/>)

export default resource;