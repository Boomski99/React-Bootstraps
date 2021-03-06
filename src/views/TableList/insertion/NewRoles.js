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
              <h4 className={classes.cardTitleWhite}>Data Jabatan</h4>
              <p className={classes.cardCategoryWhite}>Ubah Jabatan</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={7}>
                  <CustomInput
                      labelText="Nama Jabatan"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: false
                      }}
                    />
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
