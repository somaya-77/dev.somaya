
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaCodepen } from "react-icons/fa";

import Link from "next/link"

const social = [
    {icon: <FaLinkedin />, path: "https://www.linkedin.com/in/somayaelkhateb"},
    {icon: <FaSquareGithub />, path: "https://github.com/somaya-77"},
    {icon: <FaCodepen />, path: "https://codepen.io/Somaya-Elkhteeb"},
];

const Social = ({ containerStyles, iconStyles }: { containerStyles:string, iconStyles: string }) => {
    return (
        <div className={containerStyles}>
            {social.map((item, i) => {
                return (
                    <Link href={item.path} key={i} className={iconStyles}>
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
}

export default Social;

