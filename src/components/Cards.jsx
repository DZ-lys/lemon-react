const CardProp = [
    {
        genre:"Бизнес",
        posts: 
        [
            {
                img:"image6.webp",
                pub:"Бизнес",
                title:"Монложистикс групп экспортын тээвэрлэлтээ нэмэгдүүлнэ",
                journalist: "С.Ангирмаа / 12 сарын 18, 2024"
            },
            {
                img:"image9.webp",
                pub:"Бизнес",
                title:"Vans-н орлого 11 дэх сардаа дараалан унасаар",
                journalist: "М.Хулан 12 сарын 13, 2024"
            },
            {
                img:"image8.webp",
                pub:"Санхүү",
                title:"Apple Pay 10 жилийн ойгоороо Монголд нэвтэрлээ",
                journalist: "С.Ангирмаа / 12 сарын 11, 2024"
            }
        ]
    },
    {
        genre:"Хэвлэлийн мэдээ",
        posts: 
        [
            {
                img:"image10.webp",
                pub:"Хэвлэлийн мэдээ ",
                title:"Monkondi брэнд Just Chocolate-г зах зээлд нэвтрүүллээ ",
                journalist: "Lemon Press / 12 сарын 18, 2024"
            },
            {
                img:"image7.webp",
                pub:"Хэвлэлийн мэдээ",
                title:"Монгол бартендер дэлхийд өрсөлдлөө ",
                journalist: "Lemon Press / 12 сарын 13, 2024"
            },
            {
                img:"image5.webp",
                pub:"хэвлэлийн мэдээ",
                title:"Чанарын өндөр түвшинд албан байгууллага болон оффис цэвэрлэгээний үйлчилгээ үзүүлнэ",
                journalist: "Lemon Press / 12 сарын 12, 2024"
            }
        ]
    },
    {
        genre:"Эдийн засаг",
        posts: 
        [
            {
                img:"image11.webp",
                pub:"Зах зээл",
                title:"Өмнөд Солонгосын агаарын тээврийн 2 акул нэгдлээ",
                journalist: "М.Хулан 12 сарын 18, 2024"
            },
            {
                img:"image1.webp",
                pub:"Зах зээл",
                title:"Орон сууцны үнэ иргэдийн орлогоос  2-2.5 дахин үнэтэй байна",
                journalist: "С.Ангирмаа / 12 сарын 17, 2024"
            },
            {
                img:"image2.webp",
                pub:"Эдийн засаг",
                title:"Казакстаны хөгжлийн цаана",
                journalist: "С.Ангирмаа / 12 сарын 17, 2024"
            }
        ]
    },
    {
        genre:"Олон улс",
        posts: 
        [
            {
                img:"image4.webp",
                pub:"Олон улс",
                title:"2024 он дуусахаас өмнө анхаарах үйл явдлууд",
                journalist: "М.Хулан 11 сарын 4, 2024"
            },
            {
                img:"image12.webp",
                pub:"Олон улс",
                title:"Худал мэдээлэл дэлхийн эдийн засагт жил бүр $78 тэрбумын хохирол учруулдаг",
                journalist: "М.Хулан 10 сарын 29, 2024"
            },
            {
                img:"image13.webp",
                pub:"Олон улс",
                title:"Нобелийн 7 хоногийн сонин хачин",
                journalist: "М.Хулан 10 сарын 14, 2024"
            }
        ]
    },
    {
        genre:"Сурталчилгаа",
        posts: 
        [
            {
                img:"image10.webp",
                pub:"Сурталчилгаа",
                title:"Аз жаргалын амт нэгээр нэмэгдлээ",
                journalist: "Б.Эмүжин / 12 сарын 16, 2024"
            },
            {
                img:"image3.webp",
                pub:"Сурталчилгаа",
                title:"Ариглан гамнаж, ашигтай хадгал",
                journalist: "Б.Эмүжин / 12 сарын 16, 2024"
            },
            {
                img:"image7.webp",
                pub:"Сурталчилгаа",
                title:"Монгол бартендер дэлхийд өрсөлдлөө",
                journalist: "Б.Эмүжин / 12 сарын 16, 2024"
            }
        ]
    },
]

const Cards = () => {
    return (
        <div className="cardsBody">
            {CardProp.map((obj) => {
                return (
                    <div className="card">
                        <div className="cardsGenre">
                            <h2>{obj.genre}</h2>
                            <div className="line"></div>
                            <p>Илүү үзэх</p>
                        </div>
                        <div className="cardMedias">
                            {obj.posts.map((item)=>{
                                return (
                                    <div className="cardMedia">
                                        <div className="mediaImg"><img src={item.img} alt="" /></div>
                                        <div className="mediaText">
                                            <h6>{item.pub}</h6>
                                            <h4>{item.title}</h4>
                                            <p>{item.journalist}</p>
                                        </div>
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

export default Cards