import BannerImage from '../assets/card.jpeg'
const datas = { title: "Bahubali", director: "Rajamouli", hero: "Prabhas", heroine: "Anuska" }
const Crew = () => {
    // console.log(datas);
    const name = "Bahubali The Epic"
    const para = "Baahubali is a grand mythic saga set in the majestic kingdom of Mahishmati."

    const releaseYear = 2025
    const movie = `Bahubali - The Epic Movie of India ${releaseYear}`
    const moviedes = "Baahubali is a grand mythic saga set in the majestic kingdom of Mahishmati, where loyalty, valor, sacrifice, and destiny collide. The story follows Amarendra Baahubali, a noble warrior-prince loved by his people, and his son Mahendra Baahubali, who rises from ordinary beginnings to reclaim his father’s legacy. The film weaves together towering kingdoms, breathtaking battles, fierce rivalries, and powerful emotions. At its heart lies the betrayal by Bhallaladeva, whose hunger for power plunges the kingdom into darkness. Guided by courage and destiny, Baahubali stands as the symbol of justice, compassion, and unmatched strength. With iconic moments like “Why Kattappa killed Baahubali”, thunderous war sequences, mesmerizing visuals, and a timeless musical score, Baahubali transforms into a legend—an epic tale where heroes are forged in honor, villains rise through ambition, and kingdoms are shaped by destiny."


    const on = true;
    const off = 1;

    const value = null;

    return (
        <>


            <div className="moviedetail">
                <div className="movietext">
                    <h1>{movie}</h1>
                    <p>{moviedes}</p>
                </div>
            </div>


            <section className="moviedetails">
                <div className="movietext">
                    <h1>{movie} </h1>
                    <img src={BannerImage} alt="" />
                    <p>{moviedes}</p>
                    <p>{releaseYear}</p>
                </div>

            </section>

            {/* Ternary Rendering */}
            {on ? <section className="moviebox">
                <div className="box">
                    <img src={BannerImage} alt="" />
                    <h1>{name}</h1>
                    <p>{para}</p>
                </div>
            </section> : <p>There is no content</p>}


            {/* optional Rendering */}
            {off && <section className="moviebox">
                <div className="box">
                    <img src={BannerImage} alt="" />
                    <h1>{name}</h1>
                    <p>{para}</p>
                </div>
            </section>}

            {/* nullish Rendering */}
            {value ?? <section className="moviebox">
                <div className="box">
                    <img src={BannerImage} alt="" />
                    <h1>{name}</h1>
                    <p>{para}</p>
                </div>
            </section>}





        </>
    )
}
export default Crew