import React from 'react';
import { MovesLoading } from './MovesLoading';
import { MoveEntry } from './MoveEntry';

export class MoveList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            currentMove: {},
            loading: false
        };
        this.nextMove = this.nextMove.bind(this);
        this.prevMove = this.prevMove.bind(this);
    }

    componentDidMount() {
        // console.log(this.props.moves[0].move.name);
        this.loadMoves();
    }

    loadMoves() {
        this.setState({ loading: true, index: this.state.index }, () => {
            fetch(this.props.moves[this.state.index].move.url)
                .then(response => response.json())
                .then(data => {
                    this.setState({ currentMove: data, loading: false });
                });
        });
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.moves !== prevProps.moves) {
            this.setState({ index: 0 }, this.loadMoves);
        }
    }

    nextMove() {
        const nextIndex = Math.min(this.state.index + 1, this.props.moves.length - 1);
        this.setState({ index: nextIndex }, this.loadMoves);
    }

    prevMove() {
        const nextIndex = Math.max(this.state.index - 1, 0);
        this.setState({ index: nextIndex }, this.loadMoves);
    }

    render() {
        let moves;
        // let cur_move = this.props.moves[this.state.index];
        if (this.state.loading || Object.keys(this.state.currentMove).length === 0) {
            moves = <MovesLoading />;
        } else {
            const lvl = this.props.moves[this.state.index].version_group_details[0].level_learned_at;
            moves = <MoveEntry move={this.state.currentMove} lvl={lvl} />;
        }

        return (
            <div className="move-list">
                {moves}
                <div className="move-controls">
                    <div className="move-arrow" onClick={this.prevMove}>
                        <i className="fas fa-caret-up" />
                    </div>
                    <div className="move-arrow" onClick={this.nextMove}>
                        <i className="fas fa-caret-down" />
                    </div>
                </div>
            </div>
        );
    }
}