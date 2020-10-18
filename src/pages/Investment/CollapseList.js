import React, { useState } from 'react'
import { Button, Collapse } from 'react-bootstrap'
import { GoPlusSmall } from 'react-icons/go'

const CollapseList = (props) => {
  const [open, setOpen] = useState([])

  const handleOpen = (idx) => {
    const newOpen = [...open]
    newOpen[idx] = !open[idx]
    setOpen(newOpen)
  }
  return (
    <>
      {props.CollapseData.map((item, idx) => {
        return (
          <div key={item.id}>
            <Button variant="light" onClick={() => handleOpen(idx)}>
              <span>{item.title}</span>
              <span>
                <GoPlusSmall />
              </span>
            </Button>
            <Collapse in={open[idx] || false}>
              <div>
                <div
                  className="collapseContent"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                ></div>
              </div>
            </Collapse>
          </div>
        )
      })}
    </>
  )
}

export default CollapseList
