import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

function Categorys({filterByCategorys,allCategory}) {

    // to felterd Array
    const onFilter=(cat)=>{
        filterByCategorys(cat)
    }
    

    return (
        <Row className='my-2 mb-5'>
            <Col sm="12" className='d-flex justify-content-center'>
            <div>
                {
                    allCategory.length > 1 ? (allCategory.map((ele)=>(<Button key={Math.random()} onClick={()=>onFilter(ele)} className='mx-2' variant="outline-success">{ele}</Button>))) : <h1>No found data</h1>
                }
            </div>
            </Col>
        </Row>
      )
}

export default Categorys