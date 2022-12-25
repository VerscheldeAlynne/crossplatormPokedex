import React from "react";

export class NumInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({ id: e.target.value });
    }

    handleClick(e) {
        e.preventDefault();
        this.props.func(this.state.id);
    }

    render() {
        return (
            <div>
                <input
                    type="number"
                    className="screen num-input"
                    placeholder={this.props.no}
                    onChange={this.handleChange}
                />
                <div className="submit" onClick={this.handleClick} />
            </div>
        );
    }
}