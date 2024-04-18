import React from 'react'
import { Container, Hero, HeroBody, Title, Section, Columns, Column, Card, CardImage, CardContent, Content, Image, Button } from 'bloomer'
import '../../styles/home.scss'

import local_devs_image from "../../assets/undraw_landing_page_q6hh.svg"
import jobReady_image from "../../assets/undraw_software_engineer_lvl5.svg"
import joinNetwork_image from "../../assets/undraw_art_museum_8or4.svg"
import whyUs_image from "../../assets/undraw_road_sign_mfpo.svg"
import expect_image from "../../assets/undraw_online_friends_x73e.svg"
const Home = () => {
    return (
        <div>
            {/* <div className="bg_rect"></div> */}
            <Hero className="hero_full_contain" isSize='medium'>
                <div className="hero_back_rect"></div>
                <div className="hero_rectangle"></div>
                {/* <div className="hero_front_rect"></div> */}
                {/* <div className="hero_small_front_rect"></div> */}
                <HeroBody>
                <Container className="hero_container">
                <Columns>
                    <Column className="hero_leftCol" isSize='1/2'>
                            <Title hasTextAlign='centered' className="hero_Title" isSize={2} >College Connect</Title>
                            <p className="hero_blurb"></p>
                            <Button isSize={"medium"} className='browseBttn' href="/viewall">Start Browsing</Button>
                    </Column>
                    <Column className="hero_rightCol" isSize='1/2'></Column>
                </Columns>
                </Container>
                </HeroBody>
            </Hero>
            <br /><br />
            <Section>
                <Columns isCentered>
                    <Column className="home_card" isSize='1/4'>
                        <Card>

                           
                        </Card>
                    </Column>
                    <Column className="home_card" isSize='1/4'>
                        <Card>
                           
                        </Card>          </Column>
                    <Column className="home_card" isSize='1/4'>
                        <Card>
                          
                        </Card>          </Column>

                </Columns>
            </Section>
            <br /><br />
          
            <br /><br />
           
            <br /><br />
        </div>
    )
}

export default Home
