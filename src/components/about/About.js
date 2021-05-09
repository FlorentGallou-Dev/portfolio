import picture from './img/FlorentGallou.jpg';

function About() {
    return (
        <div className="bg-darkPlum">
            <section className="container-xxl py-5">
                <article className="row bg-lightPlum p-3 align-items-center">
                    <div className="col-12 col-lg-6 p-3">
                        <h1 className="py-5 text-center orangeText text-uppercase">À Propos de moi</h1>
                        <h5 className="lightText pb-3">Je suis Florent GALLOU et je suis développeur web et web mobile.</h5>
                        <p className="text-center lightText">~~~~~~ It's dangerous to go alone, take this ! ~~~~~~</p>
                        <p className="text-justify lightText">Je suis <strong>passionné, bidouilleur et créatif</strong>. J'ai fait mes études de <strong>développeur logiciel</strong> à la sortie du BAC, sans diplôme je me suis rapidement trouvé à prendre une autre voie, <strong>restauration, peinture industrielle et découpe d'acier</strong>, une voie que j'ai prise pendant <strong>10ans</strong>, pratiquement persuadé d'y avoir ma carrière.<br/><br/>Mais je n'étais jamais satisfait de mon poste, de mes responsabilités et de ma vie professionnelle. J'ai fait le choix de reprendre ma vie en main. <strong>En couple, 4 enfants</strong>, ça n'a pas été facile, mais à force de travail je m'étais remis le pied à l'étrier du développement, mais web cette fois-ci.<br/><br/>C'est au bout de pratiquement deux ans d'autoformation que ma compagne infographiste et moi créions notre première société de publicité et site internet (Wordpress), mais 2020 es arrivé et a mis un terme à notre société. Sans regret, car je voulais décoller et je n'étais plus satisfait de Wordpress, j'en voulais plus. Alors en 2021 j'ai encore repris ma formation, mais avec un <strong>titre professionnel officiel</strong> en <strong>développement web</strong> cette fois-ci.</p>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="p-3">
                            <div><img className="border border-2 border-orange rounded-circle img-fluid" src={picture} alt="Florent GALLOU" /></div>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    );
}

export default About;