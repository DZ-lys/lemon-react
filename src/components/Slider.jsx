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
                src="https://cdn.boost.mn/66d672fbb1eb1b3f1bdc87e1/creative/20c223c1-36b0-4855-9e9e-cfe9f6a233cf.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-boost-sa%40aqueous-cabinet-374702.iam.gserviceaccount.com%2F20241217%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241217T132238Z&X-Goog-Expires=86399&X-Goog-Signature=59bf797f0cc31a0c31b14f8b7bf5b1b3bdeb01db51f66c756b4720f411a0912b380fd6fa865f30dcb3633492b5d62a2a4045d93f10a51d424ee39969f76e42e125a3726f0a8d6d9df47f03de45a2817dbb74dceae4642c8aabbefdc066e4c5978ec18910ff731da9e8971d9051d28619769b98d8f20662e8a68c8fce62dd5a1d1249c52ba237c41f8cf74e78e9f1333d144c1ab2930eabd32d1330efdd49770a29ea813f1f9dfb5c33b295f701d0adf9b3794ca68a29a5b4783f08a86062eb139d62944531b07d70ed123fac951aa8aeb1f23d83b27cc8a2f94888987b6f8bcb851f66ffb66a19c50c2a69f215f6890496f6de8b94f2468baacdd52454e68ce3&X-Goog-SignedHeaders=host" alt="" />
            </div>
            <Lemonade />
        </div>
    )
}

export default Slider