import { Column } from "react-table";
import {editMembers_,deleteMembers_} from '../../../store/members/membersSlice'
interface UserDetails {
    id: string;
    constituency: string;
    candidateName: string;
    phone: string;
    symbol: string;
    photo: string;
  }
import {toggleEditModal} from '../../../store/members/membersSlice'
import {useAppDispatch} from '../../../store'
import {store} from '../../../store'
import { useDispatch } from "react-redux";

const handleEdit = (id:string) =>{
    // console.log('clicked');
}
const handleDelete = (id:string)=>{
        // store.dispatch();
}


export let COLUMNS : Column<UserDetails>[]= [
    {
        Header:"id",
        accessor:"id" as keyof UserDetails
    },
    {
        Header:"Constituency",
        accessor:"constituency"  as keyof UserDetails
    },
    {
        Header:"CandidateName",
        accessor:"candidateName"  as keyof UserDetails
    },
    {
        Header:"Phone",
        accessor:"phone"  as keyof UserDetails
    },
    {
        Header:"Symbol",
        accessor:"symbol"  as keyof UserDetails,
        Cell: (tableProps:any) => (
            <div><img src={tableProps.row.original.symbol} />{tableProps.row.original.PlayerName}</div>
          )
    },
    {
        Header:"Photo", 
        accessor:"photo"  as keyof UserDetails,
        Cell: (tableProps:any) => (
            <div><img src={tableProps.row.original.photo} />{tableProps.row.original.PlayerName}</div>
          )
    },
    {
        Header:"EDIT", 
        Cell: (tableProps:any) => (
            <div>
                <button className="bg-red-200 w-[10rem] h-[2rem]"
                onClick = {()=>handleEdit(tableProps.row.original.id)}
                >EDIT</button>
            </div>
          )
    },
    {
        Header:"DELETE", 
        Cell: (tableProps:any) => (
            <div>
                <button className="bg-red-200 w-[10rem] h-[2rem]"
                  onClick = {()=>handleDelete(tableProps.row.original.id)}
                >DELETE</button>
            </div>
          )
    },

]
