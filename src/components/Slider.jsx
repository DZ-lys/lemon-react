const Lemonade = () => {
    return (
        <div className="lemonade">
            <div className="lemonTag"><p>LEMONADE</p></div>
            <div><p>Х.Энхжин: Тийрэлтэт онгоцны Монголын анхны эмэгтэй нисгэгч | S4:E5</p></div>
        </div>
    )
} 

const Slider = () => {
    return (
        <div>
            <div className="slider">
                <img 
                src="https://cdn.boost.mn/66d672fbb1eb1b3f1bdc87e1/creative/20c223c1-36b0-4855-9e9e-cfe9f6a233cf.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-boost-sa%40aqueous-cabinet-374702.iam.gserviceaccount.com%2F20241218%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241218T152755Z&X-Goog-Expires=86399&X-Goog-Signature=19a3b4e040239cd5a61a14e477cb8141223998e595a1abf835fd90f1968e6211536a63ee37051c55bac8fde0bd9e32b853133e06468ae749334d19b89392e4cdfb7b465bbf18f623927a67031752785e433215c2f94990099735b632ce0a80abecdc7a47994b14d09bfd80ff2f9690ad02c3d4441d8d1b42d8ad1dc574ea03a097f064a26d6e1497f45d16137d8f7094bbe75cec7618d019d48729865f82b0f622f857b85fac0d99b6a39f9d1753d87ac3c7f22e9862a79f134c448a07758ad48448def3be0bd646b81c5f551fbd89f1d9390e4a5c8c4da0cd7b04b8ede4368cfdab12a9a691929a6fc5d8e232d6525916ade5b476047a3d5d53627b095f3e14&X-Goog-SignedHeaders=host" alt="" />
            </div>
            <Lemonade />
        </div>
    )
}

export default Slider