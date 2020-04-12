import React from "react"
import style from "./page-title.module.css"

export default props => (
  <div className={style.title}>
    <h1>{props.title}</h1>
    {!props.hidePagination && <h3>Page {props.currentPage}/{props.numPages}</h3>}
  </div>
)
