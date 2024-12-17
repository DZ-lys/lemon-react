const List1 = [
    {
        image: "image1.webp",
        pub: "Зах зээл",
        title: "Орон сууцны үнэ иргэдийн орлогоос  2-2.5 дахин үнэтэй байна",
        journalist: "С.Ангирмаа / 12 сарын 13, 2024"
    },
    {
        image: "image2.webp",
        pub: "Эдийн засаг",
        title: "Казакстаны хөгжлийн цаана",
        journalist: "М.Хулан / 12 сарын 17, 2024"
    },
    {
        image: "image3.webp",
        pub: "Сурталчилгаа",
        title: "Ариглан гамнаж, ашигтай хадгал",
        journalist: "Б. Эмүжин / 12 сарын 17, 2024"
    },
    {
        image: "image4.webp",
        pub: "Эдийн засаг",
        title: "Уул уурхайн салбар гадаадын хөрөнгө оруулалтын 80% гаруйг бүрдүүлж байна",
        journalist: "М.Хулан / 12 сарын 16, 2024"
    },
]
const List2 = [
    {
        image: "image5.webp",
        pub: "Зах зээл",
        title: "Япон Nasdaq-д хөл тавилаа",
        journalist: "С.Ангирмаа / 12 сарын 16, 2024"
    },
    {
        image: "image6.webp",
        pub: "Mining 101",
        title: "Уул уурхайн салбарт карьераа өсгөх боломж",
        journalist: "С.Ангирмаа / 12 сарын 16, 2024"
    },
    {
        image: "image7.webp",
        pub: "Сурталчилгаа",
        title: "Монгол бартендер дэлхийд өрсөлдлөө",
        journalist: "Б. Эмүжин / 12 сарын 16, 2024"
    },
    {
        image: "image8.webp",
        pub: "Interview",
        title: "Уран AI: Монголын Анхны интерьер болон экстерьер дизайны AI",
        journalist: "М.Хулан / 12 сарын 13, 2024"
    },
]

const NewsList = () => {
    return(
        <div>
            {List1.map((item) => {
                return (
                    <div className="list">
                        <div className="listImg"><img src={item.image} alt="" /></div>
                        <div className="listText">
                            <h6>{item.pub}</h6>
                            <h4>{item.title}</h4>
                            <p>{item.journalist}</p>
                        </div>
                    </div>
                )
            })}
            <div className="ad"><img src="https://cdn.boost.mn/66d672fbb1eb1b3f1bdc87e1/creative/bfe643d1-36ba-4da7-8217-521d83e28491.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-boost-sa%40aqueous-cabinet-374702.iam.gserviceaccount.com%2F20241217%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241217T211729Z&X-Goog-Expires=86399&X-Goog-Signature=06ee33b9ce65490801f2aeb43390fe122f5c90c6b9027893755a3b7ee983c1b9e5ff054ed378988b683bc22774d7c0ec44d55ecdd737438929c9f41ff508d088c7ce9bee321343a34a611de983358b36f2012262ac9f9e3ecec84bd84447dfdc8579e94f89c1327b5c0855647534ba74d12f8c22827ad314bdb91835ed36eaf5eb56b27bf9b557c597f37823b8863862af99a132f43009ff223121e26d7670e4dd16706c037683d1b9db272b61508bca9e49da17378ee56c92e4dc6539c85240dc5c0e20aa7499bd19f9192ee322e3afbc0cd1f0b4974b3b154981db45e825cca30796f613402d57c710cf357fed8dd6107578367b3beda7f4e20d088d8cdf19&X-Goog-SignedHeaders=host" alt="" /></div>
            {List2.map((item) => {
                return (
                    <div className="list">
                        <div className="listImg"><img src={item.image} alt="" /></div>
                        <div className="listText">
                            <h6>{item.pub}</h6>
                            <h4>{item.title}</h4>
                            <p>{item.journalist}</p>
                        </div>
                    </div>
                )
            })}
            <div className="additional"><p>Илүү үзэх</p></div>
        </div>
    )
}

export default NewsList;