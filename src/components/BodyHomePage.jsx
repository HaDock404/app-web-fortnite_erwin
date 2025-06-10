import '../styles/homepage.css'
import QuizCardTest from './QuizCardTest'
import { LanguageContext } from './LanguageContext';
import { useContext } from 'react';

import articleData1 from '../data/Article1.json';
import articleData2 from '../data/Article2.json';
import articleData3 from '../data/Article3.json';
import articleData4 from '../data/Article4.json';
import articleData5 from '../data/Article5.json';
import articleData6 from '../data/Article6.json';
import articleData7 from '../data/Article7.json';

function BodyHomePage() {
    const { language } = useContext(LanguageContext);
    const card1 = {
        English: 'Why play Fortnite?',
        Français: "Pourquoi jouer à Fortnite ?"
    };
    const card2 = {
        English: 'Installation on PC',
        Français: "Installation sur PC"
    };
    const card3 = {
        English: 'Installation on Mac',
        Français: "Installation sur Mac"
    };
    const card4 = {
        English: 'Installation on IOS - Android',
        Français: "Installation sur IOS - Android"
    };
    const card5 = {
        English: 'Installation on Gamestation',
        Français: "Installation sur Consoles"
    };
    const card6 = {
        English: 'How to play Fortnite',
        Français: "Comment jouer à Fortnite"
    };
    const card7 = {
        English: 'Activity - Battle Royale',
        Français: "Activité - Battle Royale"
    };
    const card8 = {
        English: 'Activity - Racing',
        Français: "Activité - Courses"
    };
    const card9 = {
        English: 'Activity - Music',
        Français: "Activité - Musique"
    };
    const card10 = {
        English: 'Activité - Parkours',
        Français: "Activité - Parkours"
    };
    const card11 = {
        English: 'Activity - Hide and Seek',
        Français: "Activité - Cache-Cache"
    };
    const card12 = {
        English: 'Activity - Mini Games',
        Français: "Activité - Mini Jeux"
    };

    return (
        <section className="body_homepage_section">
            <article className='body_homepage_article_header'>
                <span className='body_homepage_article_header_title'>Dashboard</span>
            </article>
            <QuizCardTest
                to="/article/articlepage1"
                data={articleData1}
                title={card1[language]}
                img_path="https://www.nintendo.com/eu/media/images/assets/nintendo_switch_games/fortnite/2x1_NSwitch_Fortnite_20250502_image1600w.jpg"
            />
            <QuizCardTest
                to="/article/articlepage2"
                data={articleData2}
                title={card2[language]}
                img_path="https://cdn2.unrealengine.com/ecosystem-w-fn-1920x1080-6d0b8c3e74ff.jpg"
            />
            <QuizCardTest
                to="/article/articlepage3"
                data={articleData3}
                title={card3[language]}
                img_path="https://i.blogs.es/e371bc/1984-1/650_1200.jpg"
            />
            <QuizCardTest
                to="/article/articlepage4"
                data={articleData4}
                title={card4[language]}
                img_path="https://cdn2.unrealengine.com/mobile-header-1920x1080-1b6de348c20f.jpg"
            />
            <QuizCardTest
                to="/article/articlepage5"
                data={articleData5}
                title={card5[language]}
                img_path="https://cdn2.unrealengine.com/16br--social-ns-performance-news-header-1920x1080-83f48856ac5f.jpg"
            />
            <QuizCardTest
                to="/article/articlepage6"
                data={articleData6}
                title={card6[language]}
                img_path="https://files.bo3.gg/uploads/image/63583/image/webp-8a022eb09330f0a80397eb22e2800c54.webp"
            />
            <QuizCardTest
                to="/article/articlepage7"
                data={articleData7}
                title={card7[language]}
                img_path="https://cdn2.unrealengine.com/Fortnite%2Fblog%2Fpatch-v-1-6---fortnite-battle-royale%2FFortnite_BR_Key-Art_w-Logo_ENG-1920x1080-3e2ce1453476b725fa59e7aeb6ecb90e4b75a0df.jpg"
            />
            <QuizCardTest
                to="/"
                data=".json"
                title={card8[language]}
                img_path="https://cdn1.epicgames.com/offer/fn/EN_28RR_1P_EGS_2560x1440_2560x1440-a9d3c2f38d6fe1670f08bac6af5d6f32"
            />
            <QuizCardTest
                to="/"
                data=".json"
                title={card9[language]}
                img_path="https://cdn2.unrealengine.com/fortnite-festival-jam-stage-1920x1080-528c57b51d5e.jpg"
            />
            <QuizCardTest
                to="/"
                data=".json"
                title={card10[language]}
                img_path="https://cdn-0001.qstv.on.epicgames.com/PBfiywkwdfNKxxAaPm/image/landscape_comp.jpeg"
            />
            <QuizCardTest
                to="/"
                data=".json"
                title={card11[language]}
                img_path="https://cdn2.unrealengine.com/Fortnite%2Fblog%2Fprop-hunt%2FEN_09CM_PropHunt_Social-1920x1080-c0bf31bc8b6a79e895bfad78249c5d6d6aae3488.jpg"
            />
            <QuizCardTest
                to="/"
                data=".json"
                title={card12[language]}
                img_path="https://cdn2.unrealengine.com/fortnite-fall-guys-islands-1920x1080-ed851a805568.jpg"
            />
        </section>
    )
}

export default BodyHomePage