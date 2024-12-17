const Hheader = () => {
    return (
        <div className="header">
            <div className="header-left">
               <img src="./lemon-logo.svg" alt="" /> 
               <h3>Товхимол</h3>
               <h3>Нийтлэлүүд</h3>
               <h3>Цувралууд</h3>
               <h3>Подкаст</h3>
               <h3>Бидний тухай</h3>
            </div>
            <div className="header-right">
                <div><img src="./search.svg" alt="" /></div>
                <button>Уншаад үзье</button>
            </div>
        </div>
    );
}

export default Hheader;