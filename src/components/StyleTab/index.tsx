import { IRootState } from "@/redux/Store"
import { ReactNode, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { connect } from "react-redux"

function StyleTab(): ReactNode {
  const active = useSelector((state: IRootState) => state.constant.activeReport)
  useEffect(() => {
    console.log('active', active)
  }, [active])

  return (
    <div>{active}</div>
  )
}

export default StyleTab