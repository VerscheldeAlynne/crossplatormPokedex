import React from 'react';
import { SpriteControls } from './SpriteControls'

export class PokemonSprite extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            front: true,
            shiny: false,
            female: false
        };

        this.toggleGender = this.toggleGender.bind(this);
        this.toggleShiny = this.toggleShiny.bind(this);
        this.toggleFront = this.toggleFront.bind(this);
    }

    buildImage() {
        const dir = this.state.front ? "front" : "back";
        const gender = this.state.female ? "_female" : "";
        const shiny = this.state.shiny ? "_shiny" : "_default";
        // console.log(dir + shiny + gender);
        return dir + shiny + gender;
    }

    toggleGender() {
        // console.log("toggling gender");
        this.setState({ female: !this.state.female }, () => {
            if (this.props.src[this.buildImage()]) {
                return;
            } else {
                this.setState({ female: false });
            }
        });
    }

    toggleShiny() {
        // console.log("toggling shiny");
        this.setState({ shiny: !this.state.shiny }, () => {
            if (this.props.src[this.buildImage()]) {
                return;
            } else {
                this.setState({ shiny: false });
            }
        });
    }

    toggleFront() {
        // console.log("toggling front");
        this.setState({ front: !this.state.front }, () => {
            if (this.props.src[this.buildImage()]) {
                return;
            } else {
                this.setState({ front: false });
            }
        });
    }

    render() {
        const imgSrc = this.props.src[this.buildImage()] || this.props.src["front_default"];
        const funcs = { gender: this.toggleGender, front: this.toggleFront, shiny: this.toggleShiny };
        return (
            <div>
                <img src={imgSrc} alt="pokemon" className="pokemon-sprite" />
                <SpriteControls
                    funcs={funcs}
                    gender={this.state.female}
                    shiny={this.state.shiny}
                    front={this.state.front}
                />
            </div>
        );
    }
}