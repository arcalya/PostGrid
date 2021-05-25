import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import './style.css'
// import '../App.scss';

import { ReactComponent as FaClock } from './icons/time.svg';

import { ReactComponent as FaCommentAlt } from './icons/comment.svg';
import { ReactComponent as FaPaw } from './icons/paw.svg';

import angrycatimage from './images/angrycat.jpg'
import intrigued_catimage from './images/intrigued_cat.jpg'
import scared_catimage from './images/scared_cat.jpg'
import tiny_catimage from './images/tiny_cat.jpg'
import grumpy_catimage from './images/grumpy_cat.jpg'
import dubious_catimage from './images/dubious_cat.jpg'



import Slider from "react-slick";

export default class Cats extends Component {

    render() {
        const angrycat = {
            "ID": "2",
            "Titre": "Why is cat perfect for you",
            "body ": "The detae of \"cats vs. Dogs\" is an arguments as old as time. Rarely will you find someone who like both equally. Dog people are very passionate about their pups and cat people are very passionate about their felines…",
            "Date": "19,05,2021",
            "Catégories": "Cat news",
            "Image": './images/angrycat.jpg',
            "Extrait": "The detae of \"cats vs. Dogs\" is an arguments as old as time. Rarely will you find someone who like both equally. Dog people are very passionate about their pups and cat people are very passionate about their felines…",
            "Readtime": "5",
            "Commentaires": "22",
            "Mise_en_avant": "NO"
        };
        const intrigued_cat = {
            "ID": "3",
            "Titre": "16 hilarious Cat Stories That Prove Cats Are The Best",
            "body ": "The detae of \"cats vs. Dogs\" is an arguments as old as time. Rarely will you find someone who like both equally. Dog people are very passionate about their pups and cat people are very passionate about their felines…",
            "Date": "19,05,2021",
            "Image": "./images/intrigued_cat.jpg"

        };
        const scared_cat = {
            "ID": "4",
            "Titre": "Funny photos of cats stuck into awkward spaces",
            "body ": "The detae of \"cats vs. Dogs\" is an arguments as old as time. Rarely will you find someone who like both equally. Dog people are very passionate about their pups and cat people are very passionate about their felines…",
            "Image": "./images/scared_cat.jpg"
        };

        const tiny_cat = {
            "ID": "5",
            "Titre": "Cats & the intermet",
            "Catégories": "Internet jokes",
            "body ": "The detae of \"cats vs. Dogs\" is an arguments as old as time. Rarely will you find someone who like both equally. Dog people are very passionate about their pups and cat people are very passionate about their felines…",
            "Image": "./images/scared_cat.jpg",
            "Readtime": "1",
            "Commentaires": "11"

        };
        const grumpy_cat = {
            "ID": "6",
            "Titre": "This grumpy cat may try to kill you",
            "body ": "The detae of \"cats vs. Dogs\" is an arguments as old as time. Rarely will you find someone who like both equally. Dog people are very passionate about their pups and cat people are very passionate about their felines…",
            "Image": "./images/grumpy_cat.jpg"
        };

        const dubious_cat = {
            "ID": "7",
            "Titre": "You'll never believe how this cat was adopted…",
            "body ": "The detae of \"cats vs. Dogs\" is an arguments as old as time. Rarely will you find someone who like both equally. Dog people are very passionate about their pups and cat people are very passionate about their felines…",
            "Date": "19,05,2021",
            "Image": "./images/dubious_cat.jpg"

        };

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
          };



        return (
            <div>
                <div className="fullmainrap sub_container">
                
                    <div className="maincard_c">
                        
                        <Card key={angrycat.ID} className={`cardId${angrycat.ID} cardId card_full`} style={{ backgroundImage: `linear-gradient(359deg, #3A414D, rgba(0, 0, 0, 0)50%), url(${angrycatimage})`, cursor: 'pointer', gridArea: "Main-row" }}>
                            <Card.Body >
                                <Card.Text className="post_categories">{angrycat.Catégories}</Card.Text>
                                <Card.Title className="post_title">{angrycat.Titre}</Card.Title>

                                <Card.Text>
                                    <FaClock />{angrycat.Readtime} <FaCommentAlt />{angrycat.Commentaires}
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
                        <Card key={intrigued_cat.ID} className={`cardId${intrigued_cat.ID} cardId card_full`} style={{ backgroundImage: "linear-gradient(359deg, #3A414D, rgba(0, 0, 0, 0)80%), url(" + intrigued_catimage + ")", cursor: 'pointer', gridArea: "Top-right" }}>
                            <Card.Body >
                                <Card.Text className="post_categories">{intrigued_cat.Catégories}</Card.Text>
                                <Card.Title className="post_title">{intrigued_cat.Titre}</Card.Title>

                                
                            </Card.Body>
                        </Card>
                        <Card key={scared_cat.ID} className={`cardId${scared_cat.ID} cardId card_full`} style={{ backgroundImage: "linear-gradient(359deg, #3A414D, rgba(0, 0, 0, 0)80%), url(" + scared_catimage + ")", cursor: 'pointer', gridArea: "lower-row" }}>
                            <Card.Body >
                                <Card.Text className="post_categories">{scared_cat.Catégories}</Card.Text>
                                <Card.Title className="post_title">{scared_cat.Titre}</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>


                    <div className="maincard_c">
                        <Card key={tiny_cat.ID} className={`cardId${tiny_cat.ID} cardId card_full`} style={{ backgroundImage: "linear-gradient(359deg, #3A414D, rgba(0, 0, 0, 0)80%), url(" + tiny_catimage + ")", cursor: 'pointer', gridArea: "Main-row" }}>
                            <Card.Body >

                                <Card.Text className="post_categories">{tiny_cat.Catégories}</Card.Text>
                                <Card.Title className="post_title">{tiny_cat.Titre}</Card.Title>

                                <Card.Text>
                                    <FaClock />{tiny_cat.Readtime}  <FaCommentAlt />{tiny_cat.Commentaires}
                                </Card.Text>
                               
                            </Card.Body>
                        </Card>
                        <Card key={grumpy_cat.ID} className={`cardId${grumpy_cat.ID} cardId card_full`} style={{ backgroundImage: "linear-gradient(359deg, #3A414D, rgba(0, 0, 0, 0)80%), url(" + grumpy_catimage + ")", cursor: 'pointer', gridArea: "Top-right" }}>
                            <Card.Body >
                                <Card.Text className="post_categories">{grumpy_cat.Catégories}</Card.Text>
                                <Card.Title className="post_title">{grumpy_cat.Titre}</Card.Title>

                               
                            </Card.Body>
                        </Card>
                        <Card key={dubious_cat.ID} className={`cardId${dubious_cat.ID} cardId card_full`} style={{ backgroundImage: "linear-gradient(359deg, #3A414D, rgba(0, 0, 0, 0)80%), url(" + dubious_catimage + ")", cursor: 'pointer', gridArea: "lower-row" }}>
                            <Card.Body >
                                <Card.Text className="post_categories">{dubious_cat.Catégories}</Card.Text>
                                <Card.Title className="post_title">{dubious_cat.Titre}</Card.Title>

                               
                            </Card.Body>
                        </Card>
                    </div>
                
                </div>
                <Slider {...settings}>

                </Slider>
            </div>
        )
    }
}


