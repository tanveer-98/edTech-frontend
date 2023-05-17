import React,{useMemo} from 'react'
import {useTable}  from 'react-table'
import members from '../members.json'
import {COLUMNS} from './columns'
interface UserDetails {
  id: string;
  constituency: string;
  candidateName: string;
  phone: string;
  symbol: string;
  photo: string;
}
const basictable = () => {
  const columns = useMemo(()=>COLUMNS,[])
  const data = useMemo(()=>members,[])


  const tableinstance = useTable<UserDetails>({
    columns,
    data
  })
  return (
    <div></div>
  )
}

export default basictable