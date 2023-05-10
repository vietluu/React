import { Details,Item,TimeStamp,ItemGroup } from "../style"
import { useContext } from "react"
import { UserContext } from "../../App"
import {localUser} from '../../common/localUser'
const React = ({data,editchange}) =>{
    const value = useContext(UserContext)
    const id = data.tweet_id;
    const userid = data.created_by.id
    return(
        <Details>
            {userid  === localUser.id && <ItemGroup>
                <Item onClick={editchange}><i className="far fa-edit"></i></Item>
                <Item hover={'red'}onClick={()=>{value.delete(id)}} ><i className="far fa-trash-alt"></i></Item>
            </ItemGroup>}
            <ItemGroup>
                <Item><i className="far fa-comment"></i></Item>
                <Item hover={'orangered'}><i className="far fa-heart"></i></Item>
                <Item hover={'blue'}><i className="far fa-retweet"></i></Item>
            </ItemGroup>
            <TimeStamp>{value.user.timestamp}</TimeStamp>

        </Details>
    )
}
export default React