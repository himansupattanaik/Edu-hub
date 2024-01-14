import React from 'react';

const DescriptionSection = ({ sections }: any) => {
    return (
        <section className='w-[50%] relative top-8  left-36'>
            {sections && sections.map((section: any, index: any) => (
                <div key={index}>
                    <h1 className=" text-3xl mt-5">{section.title}</h1>
                    {section.content.map((paragraph: any, pIndex: any) => (
                        <p className=' mt-5' key={pIndex}>{paragraph}</p>
                    ))}
                </div>
            ))}
        </section>
    );
};

export default DescriptionSection;
