const headlines = [
    {
        image:"https://dash-api.yld.mn/api/image/24f84319-9d2b-4c22-8044-d217f013492c",
        text:
        [
            {
                pub: "Зах зээл",
                title: "Нүүрсний үнэ 2022 оны оргил үеэс 4 дахин унаад байна",
                journalist: "С.Ангирмаа / 12 сарын 13, 2024"
            },
            {
                pub: "Бизнес",
                title: "Vans-н орлого 11 дэх сардаа дараалан унасаар",
                journalist: "М.Хулан / 12 сарын 13, 2024"
            },
            {
                pub: "Судалгаа",
                title: "Казакстаны хөгжлийн цаана",
                journalist: "С.Ангирмаа / 12 сарын 12, 2024"
            },
        ]
    },
    {
        image:"https://dash-api.yld.mn/api/image/f4cee43c-b1e6-4211-885b-8dc224a43114",
        text:
        [
            {
                pub: "Зах зээл",
                title: "Ирэх онд нээлтээ хийх ТОП 10 кино",
                journalist: "М.Хулан / 12 сарын 19, 2024"
            },
            {
                pub: "Бизнес",
                title: "Монложистикс групп экспортын тээвэрлэлтээ нэмэгдүүлнэ",
                journalist: "С.Ангирмаа / 12 сарын 18, 2024"
            },
            {
                pub: "Зах зээл",
                title: "Өмнөд Солонгосын агаарын тээврийн 2 акул нэгдлээ",
                journalist: "М.Хулан / 12 сарын 18, 2024"
            },
        ]
    },
]

const SideNews = () => {
    return (
    <div className="sideMedia">
        {headlines.map((item) => {
            return (
            <div className="sideBlock">
                <div className="sideImg"><img src={item.image} alt="" /></div>
                <div className="sideTexts">
                {item.text.map((text) => {
                    return(
                        <div className="sideText">
                        <h6>{text.pub}</h6>
                        <h4>{text.title}</h4>
                        <p>{text.journalist}</p>
                    </div>
                    )
                    
                })}
                </div>
            </div>    
            )
        })}
    </div>    
    )
}

export default SideNews;