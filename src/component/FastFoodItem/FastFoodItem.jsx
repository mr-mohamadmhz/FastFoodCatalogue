import Meta from "antd/es/card/Meta"
import Card from "antd/es/card/Card"
import { Badge, Space, Button, Divider } from "antd"

export default function FastFoodItem({ name, price, ingredients, imageUrl, delay }) {
    return (
        <>
            <Space direction="vertical" size="middle"
                className="w-full z-10 fade-in-horiz opacity-0"
                style={{ animationDelay: delay + "s" }}
            >
                <Badge.Ribbon className="z-20 font-bold py-1" text={`قیمت : ${price} تومان`}></Badge.Ribbon>
                <Card
                    className="h-full w-[330px] "
                    hoverable
                    cover={<div className={`${!imageUrl ? "animate-pulse" : ""} bg-slate-700 w-full`}>
                        <img className="z-20 w-full" alt="example" src={imageUrl} />
                    </div>}
                >
                    <Meta title={name} description={ingredients} />
                    <Button className="mt-5 px-3" block>افزودن به سبد خرید
                    </Button>
                </Card>
            </Space>
        </>
    )

}