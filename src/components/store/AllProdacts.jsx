import ProdactItem from "./prodact";

export default function AllProdact(){

    const ITEM =[
        {
            id:'p1',
            price:6,
            title:"my book 1",
            des:"book 1"
        },
        {
            id:'p2',
            price:5,
            title:"my book 2",
            des:"book 2"
        },
    ]
    return<>
    <div >
        {
            ITEM.map((item)=>(
                <ProdactItem 
                id={item.id}
                price={item.price}
                title={item.title}
                des={item.des}
                />
            ))
            }
    </div>
    </>
}