const miniNews = [
    {
        date: "Mon, 16 Dec 2024 23:00:00 +0000",
        title: "🇰🇿🇲🇳 Ижил замаар ялгаатай хурдаар"
    },
    {
        date: "Sun, 15 Dec 2024 23:00:00 +0000",
        title: "🪙 Крипто самурай Нью-Йоркт"
    },
    {
        date: "Thu, 12 Dec 2024 23:00:00 +0000",
        title: "🤜 Дэлхийд буурч, Монголд өснө тэр юу вэ?"
    },
    {
        date: "Wed, 11 Dec 2024 23:00:00 +0000",
        title: "🔮🪄 Accio: Тэр эргэн ирнэ"
    },
    {
        date: "Tue, 10 Dec 2024 23:00:00 +0000",
        title: "🇲🇳 Apple Pay Монголд"
    },
    {
        date: "Mon, 09 Dec 2024 23:00:00 +0000",
        title: "📢 “Ухаалаг засаг” II = $40 тэрбум"
    },
    {
        date: "Sun, 08 Dec 2024 23:00:00 +0000",
        title: "🤡 Монголын ТОП асуудал: Өөртөө хэт итгэлтэй"
    },
    {
        date: "Thu, 05 Dec 2024 23:00:00 +0000",
        title: "📢 Худалдааны дайн 2.0"
    },
    {
        date: "Wed, 04 Dec 2024 23:00:00 +0000",
        title: "🤥 Сандал ширээний онц байдал"
    },
    {
        date: "Tue, 03 Dec 2024 23:00:00 +0000",
        title: "🪬 Хилийн чанад дахь хамгаалал"
    },
    {
        date: "Tue, 03 Dec 2024 23:00:00 +0000",
        title: "💰 Хамгийн том төгрөгийн бонд"
    },
    {
        date: "Tue, 03 Dec 2024 23:00:00 +0000",
        title: "Танхимын Ерөнхийлөгч ➡️ Шийдэх асуудал"
    },
    {
        date: "Tue, 03 Dec 2024 23:00:00 +0000",
        title: "✋ Даатгал: 4+1=5"
    },
    {
        date: "Tue, 03 Dec 2024 23:00:00 +0000",
        title: "🔥 Шинэ бонд айсуй"
    },
    {
        date: "Tue, 03 Dec 2024 23:00:00 +0000",
        title: "😷 Агаарын бохирдол = ₮3.9 их наяд"
    },
    {
        date: "Tue, 03 Dec 2024 23:00:00 +0000",
        title: "🇻🇳 Монголын МАА-г аварна"
    },
    {
        date: "Tue, 03 Dec 2024 23:00:00 +0000",
        title: "🏠 Монгол мөрөөдөл: Орон сууц"
    },
    {
        date: "Tue, 03 Dec 2024 23:00:00 +0000",
        title: "!!️ Том асуудал: ТӨХК"
    },
    {
        date: "Tue, 03 Dec 2024 23:00:00 +0000",
        title: "🥇 Play Store-н аваргууд"
    },
    {
        date: "Tue, 03 Dec 2024 23:00:00 +0000",
        title: "🆕 Шинэ ТОП-100"
    },
    {
        date: "Sat, 32 Dec 2034 25:00:61 +0001",
        title: "Hi (: || LUV U <3"
    },
]

const Scroll = () => {
    return (
        <div className="scrollNews">
            <h4>Товхимлууд</h4>
            <div className="newsContainer" style={{height: "510px", width: "365px", overflow: "scroll", overflowX: "hidden"}}>
               {miniNews.map((news) => {
                  return (
                      <div className="miniNews">
                          <p>{news.date}</p>
                          <h5>{news.title}</h5>
                      </div>                    
                  )
             })}
            </div>
        </div>
        
    )
}

export default Scroll