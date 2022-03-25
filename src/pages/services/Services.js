import React from 'react';
import Service from "../../components/service/Service";
import acupuncture from '../../assets/Accupuncture+copy+2.png'
import coaching from '../../assets/Coaching+copy.png'
import pills from '../../assets/Pills+copy+2.png'
import therapy from '../../assets/Thrapy+copy+2.png'

const Services = () => {
    return (
        <div>
            <h1>Our services</h1>
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

        </div>
    );
};

export default Services;