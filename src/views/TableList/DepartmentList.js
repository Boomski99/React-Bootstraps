import React, {useState, useEffect} from 'react'
import Axios from 'axios';
import TableList from './TableList';

export default function DepartmentList() {

  const [datas, setData] = useState();
  const columns = ['Id', 'Nama Departemen', 'Deskripsi'];

  useEffect(() => {
    const newDatas = Axios.get('http://localhost/msdm-backend/departments.php', {params: {code: 1}});
    newDatas.then((res) => setData(res.data)).catch((e) => console.log(e));
  }, [])

  if (!datas) return (<p>loading</p>)

  const preprocessedData = datas.payload.map(({id, nama, deskripsi}) => (
    [id, nama, deskripsi]
  ))

  return (
    <TableList data={preprocessedData} columns={columns} />
  )
}
