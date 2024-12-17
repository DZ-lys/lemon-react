const headlines = [
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
        title: "Монголчуудын гадаадад ажиллах сонирхол өндөр хэвээр байна",
        journalist: "С.Ангирмаа / 12 сарын 12, 2024"
    },
]

const SideNews = () => {
    return (
        <div className="sideNews">
            <div className="sideImg"><img src="https://dash-api.yld.mn/api/image/24f84319-9d2b-4c22-8044-d217f013492c" alt="" /></div>
            <div className="sideContainer">
                {headlines.map((item) => {
                    return (
                        <div className="side">
                         <h6>{item.pub}</h6>
                         <h4>{item.title}</h4>
                         <p>{item.journalist}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SideNews;