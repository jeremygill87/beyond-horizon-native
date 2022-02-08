import React, { Component } from 'react';
import { Col, Row, Container, Stack } from 'react-bootstrap';
import Map from '../../images/MapTest.png';


//reference to character and map elements
var character = document.querySelector('.character');
var map = document.querySelector('.map');

//state of the character's position
var x = 0;
var y = 0;

//state of the arrow keys being held down
var held_directionals = [];

//speed at which character moves in pixels per frame
var speed = 1;

const placeCharacter = () => {

    //pixelSize pulled from CSS
    var pixelSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--pixel-size')
    );

    const held_direction = held_directionals[0];
    if (held_direction) {
        if(held_direction === held_directionals.right) {x += speed}
        if(held_direction === held_directionals.left) {x -= speed}
        if(held_direction === held_directionals.down) {y += speed}
        if(held_direction === held_directionals.up) {y -= speed}
        character.setAttribute('facing', held_direction);
        }
    character.setAttribute('walking', held_direction ? 'true' : 'false')

    character.style.transform = `translate3d( ${x*pixelSize}px, ${y*pixelSize}px, 0 )`;
    }