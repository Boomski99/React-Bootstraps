import React, {useState, useEffect} from 'react'
import Axios from 'axios';
import TableList from './TableList';

export default function KaryawanList() {

  const [datas, setData] = useState();
  const columns = ["Nama", "Jabatan", "Jam Kerja", "Gaji", "Gaji Bersih"];

  useEffect(() => {
    const newDatas = Axios.get('http://localhost/msdm-backend/employees.php', {params: {code: 2}});
    newDatas.then((res) => setData(res.data)).catch((e) => console.log(e));
  }, [])

  if (!datas) return (<p>loading</p>)

  const preprocessedData = datas.payload.map(({nama, jabatan, jam_kerja, gaji, gaji_bersih}) => (
    [nama, jabatan, jam_kerja, gaji, gaji_bersih]
  ))


  return (
    <TableList data={preprocessedData} columns={columns} />
  )
}
