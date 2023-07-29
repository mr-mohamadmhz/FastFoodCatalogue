import { Row, Col } from "antd"
import FastFoodItem from "../FastFoodItem/FastFoodItem"

export default function FastFoodList({ fastFoodItems }) {

    let delay = 0.1;
    return (
        <>
            <Row className="gap-5 flex justify-center md:justify-between xl:justify-evenly items-center w-[90%] flex-wrap" style={{ margin: '-40px auto' }}>
                {fastFoodItems.map((fastFoodItems, key) => {
                    delay += 0.030;
                    return (
                        <Col key={fastFoodItems.id} className="flex justify-center gap-5 ">
                            <FastFoodItem {...fastFoodItems} delay={delay} />
                        </Col>
                    )
                })}

            </Row>
        </>
    )
}