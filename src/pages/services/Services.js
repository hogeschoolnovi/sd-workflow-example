import React from 'react';
import './Services.css'
import Service from "../../components/service/Service";
import acupuncture from '../../assets/images/Accupuncture+copy+2.png'
import coaching from '../../assets/images/Coaching+copy.png'
import pills from '../../assets/images/Pills+copy+2.png'
import therapy from '../../assets/images/Thrapy+copy+2.png'
import Button from "../../components/button/Button";
import {useHistory} from "react-router-dom";
import '../../App.css'

const Services = () => {

    const history = useHistory()

    return (
        <div className="background-container">
            <article className='service-container'>
                <h1 className='service-title'>Our services</h1>
                <section className="section-container">
                    <Service
                        description="Therapy"
                        alt="image of chair/therapy"
                        image={therapy}
                    />
                    <Service
                        description="Psychiatry"
                        alt="image of pills/psychiatry"
                        image={pills}
                    />
                    <Service
                        description="Coaching"
                        alt="image of archery target/coaching"
                        image={coaching}
                    />
                    <Service
                        description="Acupuncture"
                        alt="image of needles/acupuncture"
                        image={acupuncture}
                    />
                </section>
                <Button
                    type="button"
                    clickHandler={() => history.push('/')}
                >
                    Learn More
                </Button>
            </article>
        </div>
    );
};

export default Services;