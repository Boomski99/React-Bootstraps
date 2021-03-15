import { makeStyles } from '@material-ui/core';
import Card from "components/Card/Card.js";
import CardBody from 'components/Card/CardBody';
import CardHeader from "components/Card/CardHeader.js";
import GridContainer from 'components/Grid/GridContainer';
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import React from 'react';
import GridItem from 'components/Grid/GridItem';
import CardFooter from 'components/Card/CardFooter';

import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,255)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function NewRoles() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={10}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>Karyawan Baru</h4>
              <p className={classes.cardCategoryWhite}>Tambah Karyawan</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={7}>
                  <CustomInput
                      labelText="Nama Karyawan"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={7}>
                  <CustomInput
                      labelText="Jam Kerja Karyawan"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={7}>
                  <CustomInput
                      labelText="Gaji Pokok Karyawan"
                      inputProps="Rp."
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={7}>
                  <p>Departemen :</p>
                  <DropdownButton id="dropdown-basic-button" title="Departemen">
                    <Dropdown.Item href="#/action-1">Gali Kubur</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Tukang Sayur</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Masak Nasi</Dropdown.Item>
                  </DropdownButton>
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="info">Simpan</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
