import React from "react";
import styles from "./GraphApp.module.css"
import { PieDiv } from "./AllTypesGraphs/Pies/PieDiv";

export function GraphApp() {
    return(
    <div className={styles.Main}>
        <PieDiv/>
    </div>
    )
}