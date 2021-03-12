import React, {useState, useEffect} from 'react'
import Axios from 'axios';
import TableList from './TableList';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default function RolesList() {

  const [datas, setData] = useState();
  const columns = ['Id', 'Nama Jabatan'];

  useEffect(() => {
    const newDatas = Axios.get('http://localhost/msdm-backend/roles.php', {params: {code: 1}});
    newDatas.then((res) => setData(res.data)).catch((e) => console.log(e));
  }, [])

  if (!datas) return (<p>loading</p>)

  const preprocessedData = datas.payload.map(({id, nama}) => (
    [id, nama]
  ))

  return (
    <>
      <TableList data={preprocessedData} columns={columns} />
      <Link
        to="/admin/roles/new"
      >
        <Button color={"primary"}>Tambah Data Jabatan</Button>
      </Link>
    </>
  )
}
