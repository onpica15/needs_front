import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

function DetailNav(props) {
    return (
        <div className="detail-nav sticky-top font-s">
          <Container>
          <ul className="sticky-nav-item">
                <li><a className="detail-nav-item active" href="#product-main-info"><span>商品介紹</span></a></li>
                <li><a className="detail-nav-item" href="#delivery-payment-info"><span>運費與其他資訊</span></a></li>
                <li><a className="detail-nav-item" href="#"><span>購買評價</span></a></li>
            </ul>
          </Container>
        </div>

    )
}

export default DetailNav