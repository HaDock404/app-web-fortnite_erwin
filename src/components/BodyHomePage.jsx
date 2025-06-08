import '../styles/homepage.css'
import QuizCard from './QuizCard'
import QuizCardTest from './QuizCardTest'

function BodyHomePage() {
    return (
        <section className="body_homepage_section">
            <article className='body_homepage_article_header'>
                <span className='body_homepage_article_header_title'>Dashboard</span>
            </article>
            <QuizCardTest
                to="/"
                data="fortnite_what.json"
                title="Pourquoi jouer à Fortnite ?"
                img_path="https://www.nintendo.com/eu/media/images/assets/nintendo_switch_games/fortnite/2x1_NSwitch_Fortnite_20250502_image1600w.jpg"
            />
            <QuizCardTest
                to="/"
                data=".json"
                title="Installation PC"
                img_path="https://cdn2.unrealengine.com/ecosystem-w-fn-1920x1080-6d0b8c3e74ff.jpg"
            />
            <QuizCardTest
                to="/"
                data=".json"
                title="Installation Mac"
                img_path="https://i.blogs.es/e371bc/1984-1/650_1200.jpg"
            />
            <QuizCardTest
                to="/"
                data=".json"
                title="Installation IOS - Android"
                img_path="https://cdn2.unrealengine.com/mobile-header-1920x1080-1b6de348c20f.jpg"
            />
            <QuizCardTest
                to="/"
                data=".json"
                title="Installation Consoles"
                img_path="https://cdn2.unrealengine.com/16br--social-ns-performance-news-header-1920x1080-83f48856ac5f.jpg"
            />
            <QuizCardTest
                to="/"
                data=".json"
                title="Comment jouer à Fortnite"
                img_path="https://files.bo3.gg/uploads/image/63583/image/webp-8a022eb09330f0a80397eb22e2800c54.webp"
            />
            <QuizCardTest
                to="/"
                data=".json"
                title="Activité - Battle Royale"
                img_path="https://cdn2.unrealengine.com/Fortnite%2Fblog%2Fpatch-v-1-6---fortnite-battle-royale%2FFortnite_BR_Key-Art_w-Logo_ENG-1920x1080-3e2ce1453476b725fa59e7aeb6ecb90e4b75a0df.jpg"
            />
            <QuizCardTest
                to="/"
                data=".json"
                title="Activité - Courses"
                img_path="https://cdn1.epicgames.com/offer/fn/EN_28RR_1P_EGS_2560x1440_2560x1440-a9d3c2f38d6fe1670f08bac6af5d6f32"
            />
            <QuizCardTest
                to="/"
                data=".json"
                title="Activité - Musiques"
                img_path="https://cdn2.unrealengine.com/fortnite-festival-jam-stage-1920x1080-528c57b51d5e.jpg"
            />
            <QuizCardTest
                to="/"
                data=".json"
                title="Activité - Parkours"
                img_path="https://cdn-0001.qstv.on.epicgames.com/PBfiywkwdfNKxxAaPm/image/landscape_comp.jpeg"
            />
            <QuizCardTest
                to="/"
                data=".json"
                title="Activité - Cache-Cache"
                img_path="https://cdn2.unrealengine.com/Fortnite%2Fblog%2Fprop-hunt%2FEN_09CM_PropHunt_Social-1920x1080-c0bf31bc8b6a79e895bfad78249c5d6d6aae3488.jpg"
            />
            <QuizCardTest
                to="/"
                data=".json"
                title="Activité - Mini Jeux"
                img_path="https://cdn2.unrealengine.com/fortnite-fall-guys-islands-1920x1080-ed851a805568.jpg"
            />
        </section>
    )
}

export default BodyHomePage