const Hheader = () => {
    return (
        <div className="header">
            <div className="header-left">
               <img src="./lemon-logo.svg" alt="" /> 
               <h3>Товхимол <span>&gt;</span></h3>
               <h3>Нийтлэлүүд <span>&gt;</span></h3>
               <h3>Цувралууд <span>&gt;</span></h3>
               <h3>Подкаст <span>&gt;</span></h3>
               <h3>Бидний тухай <span>&gt;</span></h3>
            </div>
            <div className="header-right">
                <div><img src="./search.svg" alt="" /></div>
                <button>Уншаад үзье</button>
            </div>
        </div>
    );
}

export default Hheader;