import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
import ButterflyCat from './images/butterfly_cat.jpg';
import '../App.css';

import { ReactComponent as FaPaw } from './icons/paw.svg';


export default class Firstpost extends Component {
 
    render() {

        // console.log(ButterflyCat);

        var sectionStyle = {
            height: "550px",
            borderRadius: "25px",
            backgroundImage: "url(" + ButterflyCat + ")",
            backgroundPosition: 'top-center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            boxShadow: '0px 0px 13px 0px rgba(0,0,0,0.46)',
            paddingLeft: '25px',
            paddingRight: '25px',
            margin:'0px'

          };
          
        return (
            <div >
                <h3 className="articles_header">New articles</h3>
                <h1>Our publications <FaPaw /></h1>
                <Card className="card_full" style={ sectionStyle } >

                    <Card.Body >
                    <Card.Text className="post_categories">Tops</Card.Text>
                        <Card.Title className="post_title">10 Reasons why cats are superior to dogs in every was possible.</Card.Title>
                        <Card.Text  className="post_body">
                        The detae of "cats vs. Dogs" is an arguments as old as time. Rarely will you find someone who like both equally. Dog people are very passionate about their pups and cat people are very passionate about their felines…
                        </Card.Text>
                        <div variant="primary" className="post_btn">Read More! <FaPaw /></div>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
