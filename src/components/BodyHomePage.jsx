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
import articleData8 from '../data/Article8.json';
import articleData9 from '../data/Article9.json';
import articleData10 from '../data/Article10.json';
import articleData11 from '../data/Article11.json';
import articleData12 from '../data/Article12.json';

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
                img_path="https://storage.googleapis.com/fortnite-erwin/image1.jpg"
            />
            <QuizCardTest
                to="/article/articlepage2"
                data={articleData2}
                title={card2[language]}
                img_path="https://storage.googleapis.com/fortnite-erwin/image2.jpg"
            />
            <QuizCardTest
                to="/article/articlepage3"
                data={articleData3}
                title={card3[language]}
                img_path="https://storage.googleapis.com/fortnite-erwin/image3.jpg"
            />
            <QuizCardTest
                to="/article/articlepage4"
                data={articleData4}
                title={card4[language]}
                img_path="https://storage.googleapis.com/fortnite-erwin/image4.jpg"
            />
            <QuizCardTest
                to="/article/articlepage5"
                data={articleData5}
                title={card5[language]}
                img_path="https://storage.googleapis.com/fortnite-erwin/image5.jpg"
            />
            <QuizCardTest
                to="/article/articlepage6"
                data={articleData6}
                title={card6[language]}
                img_path="https://storage.googleapis.com/fortnite-erwin/image6.png"
            />
            <QuizCardTest
                to="/article/articlepage7"
                data={articleData7}
                title={card7[language]}
                img_path="https://storage.googleapis.com/fortnite-erwin/image7.jpg"
            />
            <QuizCardTest
                to="/article/articlepage8"
                data={articleData8}
                title={card8[language]}
                img_path="https://storage.googleapis.com/fortnite-erwin/image8.jpeg"
            />
            <QuizCardTest
                to="/article/articlepage9"
                data={articleData9}
                title={card9[language]}
                img_path="https://storage.googleapis.com/fortnite-erwin/image9.jpg"
            />
            <QuizCardTest
                to="/article/articlepage10"
                data={articleData10}
                title={card10[language]}
                img_path="https://storage.googleapis.com/fortnite-erwin/image10.jpeg"
            />
            <QuizCardTest
                to="/article/articlepage11"
                data={articleData11}
                title={card11[language]}
                img_path="https://storage.googleapis.com/fortnite-erwin/image11.jpg"
            />
            <QuizCardTest
                to="/article/articlepage12"
                data={articleData12}
                title={card12[language]}
                img_path="https://storage.googleapis.com/fortnite-erwin/image12.jpg"
            />
        </section>
    )
}

export default BodyHomePage