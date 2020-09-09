import React from 'react'
import { AiFillClockCircle, AiFillPhone, AiFillHome, AiOutlineHome, AiFillHeart } from 'react-icons/ai'
import { FaCity, FaClinicMedical, FaRegCommentAlt, FaRainbow, FaTree } from 'react-icons/fa'
import { BsFillPlayFill, BsArrowRight, BsSun, BsFillOctagonFill } from 'react-icons/bs'
import { GiSiren, GiTwirlyFlower, GiClover } from 'react-icons/gi'
import { BiDonateHeart } from 'react-icons/bi'

export const allResources = [
    { label: "Immediate Support", value: "Immediate", icon: <BsFillPlayFill/>},
    { label: "Limited Hours Call Support", value: "Limited Hours", icon: <AiFillClockCircle/>},
    { label: "24 Hour Call Support", value: "24/7", icon: <AiFillPhone/>},
    { label: "Referral and Resource Hub", value: "Referral", icon: <BsArrowRight/>},
    { label: "Pittsburgh Specific", value: "Pittsburgh", icon: <FaCity/>},
    { label: "Mobile Unit and Possible Police", value: "Possible Police", icon: <GiSiren/>},
    { label: "Crisis", value: "Crisis", icon: <GiTwirlyFlower/>},
    { label: "Medical", value: "Medical", icon: <FaClinicMedical/>},
    { label: "Mental Health", value: "Mental Health", icon: <FaRegCommentAlt/>},
    { label: "Violence", value: "Violence", icon: <BsFillOctagonFill/>},
    { label: "Housing", value: "Housing", icon: <AiFillHome/>},
    { label: "Harm Reduction", value: "Harm Reduction", icon: <BiDonateHeart/>},
    { label: "Houseless", value: "Houseless", icon: <AiOutlineHome/>},
    { label: "LGBTQ+", value: "LGBTQ+", icon: <FaRainbow/>},
    { label: "Families", value: "Families", icon: <GiClover/>},
    { label: "Youth", value: "Youth", icon: <BsSun/>},
    { label: "Elders", value: "Elders", icon: <FaTree/>},
    { label: "Anyone", value: "Anyone", icon: <AiFillHeart/>}
];

export const urgencyOptions = [
    { label: "Immediate Support", value: "Immediate", icon: <BsFillPlayFill/>},
    { label: "Limited Hours Call Support", value: "Limited Hours", icon: <AiFillClockCircle/>},
    { label: "24 Hour Call Support", value: "24/7", icon: <AiFillPhone/>}
];

export const referallOptions = [
    { label: "Referral and Resource Hub", value: "Referral", icon: <BsArrowRight/>}
];

export const typeOptions = [
    { label: "Pittsburgh Specific", value: "Pittsburgh", icon: <FaCity/>},
    { label: "Mobile Unit and Possible Police", value: "Possible Police", icon: <GiSiren/>},
    { label: "Crisis", value: "Crisis", icon: <GiTwirlyFlower/>},
    { label: "Medical", value: "Medical", icon: <FaClinicMedical/>},
    { label: "Mental Health", value: "Mental Health", icon: <FaRegCommentAlt/>},
    { label: "Violence", value: "Violence", icon: <BsFillOctagonFill/>},
    { label: "Housing", value: "Housing", icon: <AiFillHome/>},
    { label: "Harm Reduction", value: "Harm Reduction", icon: <BiDonateHeart/>},
    { label: "Houseless", value: "Houseless", icon: <AiOutlineHome/>},
    { label: "LGBTQ+", value: "LGBTQ+", icon: <FaRainbow/>},
    { label: "Families", value: "Families", icon: <GiClover/>},
    { label: "Youth", value: "Youth", icon: <BsSun/>},
    { label: "Elders", value: "Elders", icon: <FaTree/>},
    { label: "Anyone", value: "Anyone", icon: <AiFillHeart/>}
];

export const groupedOptions = [
    {
        label: "Urgency Status",
        options: urgencyOptions
    },
    {
        label: "Resource Portal",
        options: referallOptions
    },
    {
        label: "Support Type",
        options: typeOptions
    }
];