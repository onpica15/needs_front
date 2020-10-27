import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import {
  BsPersonFill,
  BsFillBellFill,
  BsQuestionSquareFill,
} from 'react-icons/bs'
import { FaShoppingBag, FaStore, FaCoins } from 'react-icons/fa'
import { RiMessage2Fill } from 'react-icons/ri'
import { MdAddAPhoto } from 'react-icons/md'
const MemSidebar = () => {
  return (
    <>
      <div className="d-flex flex-column memsidebar">
        <div className="sticker"> </div>
        <p className="font-ss">
          <Link to="#">
            <div className="d-flex wrapper">
              <div className="icons">
                <MdAddAPhoto />
              </div>
              更換大頭貼{' '}
            </div>
          </Link>
          <Link to="#"></Link>{' '}
        </p>
        <p className="font-s">
          <Link to="#">
            <div className="d-flex wrapper">
              <div className="icons">
                <BsPersonFill />
              </div>
              我的帳號{' '}
            </div>{' '}
          </Link>{' '}
        </p>
        <p className="font-s">
          <Link to="#">
            <div className="d-flex wrapper">
              <div className="icons">
                <FaShoppingBag />
              </div>
              購買清單{' '}
            </div>{' '}
          </Link>{' '}
        </p>
        <p className="font-s">
          <Link to="#">
            <div className="d-flex wrapper">
              <div className="icons">
                <FaStore />
              </div>
              我的關注{' '}
            </div>{' '}
          </Link>{' '}
        </p>
        <p className="font-s">
          <Link to="#">
            <div className="d-flex wrapper">
              <div className="icons">
                <BsFillBellFill />
              </div>
              通知中心{' '}
            </div>{' '}
          </Link>{' '}
        </p>
        <p className="font-s">
          <Link to="#">
            <div className="d-flex wrapper">
              <div className="icons">
                <FaCoins />
              </div>
              Ｅcoin{' '}
            </div>{' '}
          </Link>{' '}
        </p>
        <p className="font-s">
          <Link to="#">
            <div className="d-flex wrapper">
              <div className="icons">
                <RiMessage2Fill />
              </div>
              我的評論{' '}
            </div>{' '}
          </Link>{' '}
        </p>
        <p className="font-s">
          <Link to="#">
            <div className="d-flex wrapper">
              <div className="icons">
                <BsQuestionSquareFill />
              </div>
              常見問題{' '}
            </div>{' '}
          </Link>{' '}
        </p>{' '}
      </div>{' '}
    </>
  )
}

export default MemSidebar
