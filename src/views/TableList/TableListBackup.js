import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import Axios from 'axios';

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);


export default function TableList() {
  const classes = useStyles();
  const [datas, setData] = useState();

  useEffect(() => {
    const newDatas = Axios.get('http://localhost/msdm-backend/employees.php', {params: {code: 2}});
    newDatas.then((res) => setData(res.data)).catch((e) => console.log(e));
  }, [])

  console.log(datas)

  if (!datas) return (<p>loading</p>)

  const preprocessedData = datas.payload.map(({nama, jabatan, jam_kerja, gaji, gaji_bersih}) => (
    [nama, jabatan, jam_kerja, gaji, gaji_bersih]
  ))

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Daftar Pegawai</h4>
            <p className={classes.cardCategoryWhite}>
              Daftar List Pegawai pada database MSDM
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Nama", "Jabatan", "Jam Kerja", "Gaji", "Gaji Bersih"]}
              tableData={[
                ...preprocessedData
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
