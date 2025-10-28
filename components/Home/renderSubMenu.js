import Link from "next/link";

const RenderSubMenu=(props)=>{
    return <li className="menu-item"><Link href={`/category/${props.menuId}`}>{props.menuItem}</Link></li>
           
}

export default RenderSubMenu;