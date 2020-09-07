import React from 'react'
import './content.css'
import { AiFillClockCircle, AiFillPhone, AiFillHome, AiOutlineHome, AiFillHeart } from 'react-icons/ai'
import { FaCity, FaClinicMedical, FaRegCommentAlt, FaRainbow, FaTree } from 'react-icons/fa'
import { BsFillPlayFill, BsArrowRight, BsSun } from 'react-icons/bs'
import { GiSiren, GiTwirlyFlower, GiClover } from 'react-icons/gi'
import { CgShapeHexagon } from 'react-icons/cg'
import { BiDonateHeart } from 'react-icons/bi'


const content = (props) => {
    var list = props.tags
    return (
        <div className="Content">
            <h2 className="name">{props.name}</h2>
            <a className="phone" href={props.phone_link}>{props.formatted_phone}</a>
            <div><br></br></div>
            <a className="website" href={props.website}>Website</a>
            <p className="description">{props.description}</p>
            <ul className="tags">
                {list.map(listitem => (
                    <li key={listitem}>{AddIcons(listitem)}</li>
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
iconMap.set("Houesless", <AiOutlineHome size="25px"/>)
iconMap.set("LGBTQ+", <FaRainbow size="25px"/>)
iconMap.set("Families", <GiClover size="25px"/>)
iconMap.set("Youth", <BsSun size="25px"/>)
iconMap.set("Elders", <FaTree size="25px"/>)
iconMap.set("Anyone", <AiFillHeart size="25px"/>)

export default content;