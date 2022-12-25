import React from "react";
import { Divider } from "./Divider";
import { LeftPanel } from "./LeftPanel";
import { RightPanel } from "./RightPanel";

function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export class Pokedex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            requestRoot: "https://pokeapi.co/api/v2/pokemon/",
            pokemonIndex: 1,
            pokemonData: {},
            pokemonDescription: "",
            speciesData: {},
            evoSprites: [],
            evoNames: [],
            moves: [],
            loading: false
        };
        this.nextPokemon = this.nextPokemon.bind(this);
        this.previousPokemon = this.previousPokemon.bind(this);
        this.pickPokemon = this.pickPokemon.bind(this);
    }

    nextPokemon() {
        const next = Math.min(this.state.pokemonIndex + 1, 949);
        this.setState({ pokemonIndex: next }, this.changePokemon);
    }

    previousPokemon() {
        const prev = Math.max(this.state.pokemonIndex - 1, 1);
        this.setState({ pokemonIndex: prev }, this.changePokemon);
    }

    pickPokemon(no) {
        this.setState({ pokemonIndex: no }, this.changePokemon);
    }

    componentDidMount() {
        this.changePokemon();
    }

    changePokemon() {
        this.setState({ loading: true });
        const request = `${this.state.requestRoot}${this.state.pokemonIndex}/`;
        fetch(request, {
            cache: "force-cache"
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    pokemonData: data,
                    pokemonIndex: data.id
                });
                const speciesRequest = data.species.url;
                return fetch(speciesRequest);
            })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    speciesData: data,

                    description: pickRandom(
                        data.flavor_text_entries.filter(e => e.language.name === "en").map(e => e.flavor_text)
                    ),

                    loading: false
                });
                const evo_chain = data.evolution_chain.url;
                fetch(evo_chain)
                    .then(response => response.json())
                    .then(data => {
                        const api = "https://pokeapi.co/api/v2/pokemon/";
                        const first = data.chain;
                        let second;
                        let third;
                        let evos = [];
                        if (first) {
                            const e1 = fetch(`${api}${first.species.name}/`);
                            evos.push(e1);
                            second = first.evolves_to[0];
                        }
                        if (second) {
                            const e2 = fetch(`${api}${second.species.name}/`);
                            third = second.evolves_to[0];

                            evos.push(e2);
                        }
                        if (third) {
                            const e3 = fetch(`${api}${third.species.name}/`);
                            evos.push(e3);
                        }
                        Promise.all(evos)
                            .then(responses => Promise.all(responses.map(value => value.json())))
                            .then(dataList => {
                                const sprites = dataList.map(v => v.sprites.front_default);
                                const names = dataList.map(n => n.name);
                                this.setState({ evoSprites: sprites, evoNames: names });
                            });
                    });
            });
    }

    render() {
        const pData = this.state.pokemonData;
        const sData = this.state.speciesData;

        return (
            <div className="pokedex">
                <LeftPanel
                    pData={pData}
                    sData={sData}
                    no={this.state.pokemonIndex}
                    description={this.state.description}
                />
                <Divider />
                <RightPanel
                    pData={pData}
                    sData={sData}
                    evoSprites={this.state.evoSprites}
                    evoNames={this.state.evoNames}
                    controls={{ next: this.nextPokemon, prev: this.previousPokemon, pick: this.pickPokemon }}
                    no={this.state.pokemonIndex}
                />
                {/* <TypeList /> */}
            </div>
        );
    }
}