import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { getAllTimeRecords } from "../services/APIServices";

const useStyles = makeStyles({
  card: {
    margin: "10px",
  },
  card_content: {
    display: "flex",
    height: "100%",
  },
  div_table: {
    flexGrow: 1,
    minHeight: '400px',
  },
});
const TimeRecords = () => {
    const classes = useStyles();
    const getAll = getAllTimeRecords;

    const columns = [
      { field: "id", headerName: "ID", width: 90 },
      {
        field: "time_start",
        headerName: "Inicio",
        width: 200,
      },
      {
        field: "time_end",
        headerName: "Fin",
        width: 200,
      },
      {
        field: "time_run",
        headerName: "Cronometrado",
        width: 200,
      },
    ];
    const [rows, setRows] = useState([]);
    useEffect(() => {
        getAll().then(response => {
            setRows(response.data);
        })
    });

    return (
      <Card className={classes.card}>
        <CardContent className={classes.card_content}>
          <div className={classes.div_table}>
            <DataGrid rows={rows} columns={columns} />
          </div>
        </CardContent>
      </Card>
    );
};

export default TimeRecords;
