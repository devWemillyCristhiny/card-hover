import React from 'react'
import './CardHover.css'
import imagen001 from '../image/imagen001.jpg'
import imagen002 from '../image/imagen002.png'
import imagen003 from '../image/imagen003.jpg'

export default function(){
    return (
        <div className="container">
            <div className="card">
                <div className="imgBx">
                    <img src={imagen001}/>
                </div>
                <div className="content">
                    <h2>Card One</h2>
                    <p>Lorem Ipsum é simplesmente um texto fictício da indústria 
                        de impressão e composição. Lorem Ipsum tem sido o texto 
                        fictício padrão da indústria desde os anos 1500, quando 
                        um impressor desconhecido pegou uma galé do tipo e 
                        embaralhou para fazer um livro de amostra de tipos.</p>
                </div>
            </div>
            <div className="card">
                <div className="imgBx">
                    <img src={imagen002}/>
                </div>
                <div className="content">
                    <h2>Card Two</h2>
                    <p>Lorem Ipsum é simplesmente um texto fictício da indústria 
                        de impressão e composição. Lorem Ipsum tem sido o texto 
                        fictício padrão da indústria desde os anos 1500, quando 
                        um impressor desconhecido pegou uma galé do tipo e 
                        embaralhou para fazer um livro de amostra de tipos.</p>
                </div>
            </div>
            <div className="card">
                <div className="imgBx">
                    <img src={imagen003}/>
                </div>
                <div className="content">
                    <h2>Card Three</h2>
                    <p>Lorem Ipsum é simplesmente um texto fictício da indústria 
                        de impressão e composição. Lorem Ipsum tem sido o texto 
                        fictício padrão da indústria desde os anos 1500, quando 
                        um impressor desconhecido pegou uma galé do tipo e 
                        embaralhou para fazer um livro de amostra de tipos.</p>
                </div>
            </div>
        </div>
    )
}