import React from 'react'
import { useSelector } from 'react-redux'
import {
  Row,
  Button,
  Dropdown,
  InputGroup,
  Form,
  FormControl,
} from 'react-bootstrap'
import {
  AiOutlinePlus,
  AiOutlineAppstore,
  AiOutlineBars,
  AiOutlineSearch,
} from 'react-icons/ai'

const ToolBar = (props) => {
  const {
    type,
    setType,
    viewType,
    setViewType,
    showAddProd,
    setShowAddProd,
    showAddCourse,
    setShowAddCourse,
  } = props
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
            className={type === 'launched' ? 'actived' : ''}
            onClick={(e) => setType('launched')}
          >
            架上商品
          </Button>
          <Button
            variant="light"
            className={type === 'soldout' ? 'actived' : ''}
            onClick={(e) => setType('soldout')}
          >
            已售完
          </Button>
          <Button
            variant="light"
            className={type === 'unlaunched' ? 'actived' : ''}
            onClick={(e) => setType('unlaunched')}
          >
            未上架
          </Button>
        </div>
        <Form className="searchBar">
          <Form.Control as="select" id="inlineFormCustomSelect" custom>
            <option value="0">商品名稱</option>
            <option value="1">商品類別</option>
          </Form.Control>
          <InputGroup>
            <FormControl aria-describedby="basic-addon1" />
          </InputGroup>
          <Button variant="light" className="searchbtn" type="submit">
            <AiOutlineSearch size="24px" />
          </Button>
        </Form>
      </Row>
      <Row className="buttonSec my-3">
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">
            <AiOutlinePlus size="30px" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={(e) => setShowAddProd(true)}>
              實體商品
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => setShowAddCourse(true)}>
              活動體驗
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className="viewSelect d-flex">
          <Button
            variant="light"
            className={`${viewType === 'grid' ? 'actived' : ''}`}
            onClick={(e) => setViewType('grid')}
          >
            <AiOutlineAppstore size="35px" />
          </Button>
          <Button
            variant="light"
            className={` ml-2 ${viewType === 'list' ? 'actived' : ''}`}
            onClick={(e) => setViewType('list')}
          >
            <AiOutlineBars size="40px" />
          </Button>
        </div>
      </Row>
    </>
  )
}

export default ToolBar
