import React from 'react'
import Banner from '../../components/banner';
import Footer from '../../components/footer';
import Mars from '../../components/mars'
import SectionForm from '../../components/section-form';

function Home(){

    return(
        <>
            <Banner />
            <Mars />
            <SectionForm />
            <Footer />
        </>
    )
}

export default Home;