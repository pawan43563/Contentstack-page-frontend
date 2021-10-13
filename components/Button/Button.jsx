
export default function Button({cls,content,link}){
    return(
        <a className={`${cls}`} href={link}>{content}</a>
    )
}