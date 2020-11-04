import React from 'react'
import { useSelector } from 'react-redux'
import { Row, Button, InputGroup, Form, FormControl } from 'react-bootstrap'
import { AiOutlineSearch } from 'react-icons/ai'

const ToolBar = (props) => {
  const { type, setType, viewType, setViewType } = props
  return (
    <>
      <Row className="toolsSec my-3">
        <div className="productsType">
          <Button
            variant="light"
            className={type === 'all' ? 'actived' : ''}
            onClick={(e) => setType('all')}
          >
            全部
          </Button>
          <Button
            variant="light"
            className={type === 'unpaid' ? 'actived' : ''}
            onClick={(e) => setType('unpaid')}
          >
            待付款
          </Button>
          <Button
            variant="light"
            className={type === 'backorder' ? 'actived' : ''}
            onClick={(e) => setType('backorder')}
          >
            待出貨
          </Button>
          <Button
            variant="light"
            className={type === 'returning' ? 'actived' : ''}
            onClick={(e) => setType('returned')}
          >
            退貨中
          </Button>
        </div>
        <Form className="searchBar">
          <Form.Control as="select" id="inlineFormCustomSelect" custom>
            <option value="0">訂單編號</option>
            <option value="1">訂購人電話</option>
            <option value="1">訂購人姓名</option>
          </Form.Control>
          <InputGroup>
            <FormControl aria-describedby="basic-addon1" />
          </InputGroup>
          <Button variant="light" className="searchbtn" type="submit">
            <AiOutlineSearch size="24px" />
          </Button>
        </Form>
      </Row>
    </>
  )
}

export default ToolBar
